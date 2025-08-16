// /store/api/courses/courseApi.ts
import { baseApi } from "../baseApi";

interface Course {
  id: number;
  name: string;
  community_id: number;
  course_type?: number;
  is_published?: boolean;
  createdat?: Date;
  updatedat?: Date;
  start_date?: string;
  isEnrolled: boolean;
}
export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  totalCourses: number;
}

export interface CourseResponse {
  success: boolean;
  courses: Course[];
  error?: string;
  pagination?: Pagination;
}

export interface CreateCoursePayload {
  member_id: number;
  community_id: number;
  name: string;
  course_type: number;
}
export interface CourseExecutionType {
  id: number;
  execution_type: string;
  createdat: string;
  updatedat: string;
}

interface ExecutionTypeResponse {
  success: boolean;
  data?: CourseExecutionType[];
  error?: string;
}
export interface Lesson {
  id: string;
  title: string;
  position: number;
  status: string;
  isCompleted: boolean;
}

export interface Section {
  id: string;
  title: string;
  position: number;
  course_id: string;
  lessons: Lesson[];
}

export interface CourseContentResponse {
  success: boolean;
  course_id: number;
  course_name: string;
  course_type_id: string;
  course_type: string;
  progress_percent: string;
  isCourseComplete: boolean;
  completed_lessons: number;
  total_lessons: number;
  isEnrolled: boolean;
  sections: Section[];
}

export interface CreateSectionResponse {
  success: boolean;
  message: string;
  section: Section;
}

export interface CreateLessonResponse {
  success: boolean;
  message: string;
  section: Section;
}

export const courseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //get all Courses:

    getCourses: builder.query<
      CourseResponse,
      { communityId: number; memberId: number; page?: number }
    >({
      query: ({ communityId, memberId, page = 1 }) =>
        `courses/get-courses-by-community?community_id=${communityId}&member_id=${memberId}&page=${page}`,
      providesTags: (result) =>
        result?.courses
          ? [
              ...result.courses.map((item) => ({
                type: "Courses" as const,
                id: item.id,
              })),
              { type: "Courses", id: "LIST" },
            ]
          : [{ type: "Courses", id: "LIST" }],
    }),

    //for Create courses:

    createCourse: builder.mutation<CourseResponse, FormData>({
      query: (formData) => ({
        url: "/courses/create-course",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: [{ type: "Courses", id: "LIST" }],
    }),

    //CreateSection
    createSection: builder.mutation<CreateSectionResponse, FormData>({
      query: (formData) => ({
        url: "/courses/section/create-section",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Sections"],
    }),

    //CreateLesson

    createLesson: builder.mutation<CreateLessonResponse, FormData>({
      query: (formData) => ({
        url: "/courses/lesson/create-lesson",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Sections"],
    }),
    //  courseApi type

    getCourseExecutionTypes: builder.query<ExecutionTypeResponse, void>({
      query: () => "/courses/get-course-execution-type",
    }),
    //get-course-content by Courses id {single course page}

    getCourseContentById: builder.query<
      CourseContentResponse,
      { member_id: number; course_id: number }
    >({
      query: ({ member_id, course_id }) =>
        `/courses/get-course-content-by-course-id?member_id=${member_id}&course_id=${course_id}`,
      providesTags: ["Sections"],
    }),

    //Enroll-course
    enrollCourses: builder.mutation<CreateLessonResponse, FormData>({
      query: (formData) => ({
        url: "/courses/enroll-course",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: [{ type: "Courses", id: "LIST" }],
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useCreateCourseMutation,
  useCreateSectionMutation,
  useCreateLessonMutation,
  useGetCourseExecutionTypesQuery,
  useGetCourseContentByIdQuery,
  useEnrollCoursesMutation,
} = courseApi;
