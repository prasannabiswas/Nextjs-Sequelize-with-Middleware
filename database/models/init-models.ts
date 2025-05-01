import type { Sequelize } from "sequelize";
import { access_group_members as _access_group_members } from "./access_group_members";
import type { access_group_membersAttributes, access_group_membersCreationAttributes } from "./access_group_members";
import { access_group_spaces as _access_group_spaces } from "./access_group_spaces";
import type { access_group_spacesAttributes, access_group_spacesCreationAttributes } from "./access_group_spaces";
import { access_groups as _access_groups } from "./access_groups";
import type { access_groupsAttributes, access_groupsCreationAttributes } from "./access_groups";
import { access_groups_status as _access_groups_status } from "./access_groups_status";
import type { access_groups_statusAttributes, access_groups_statusCreationAttributes } from "./access_groups_status";
import { chat_conversations as _chat_conversations } from "./chat_conversations";
import type { chat_conversationsAttributes, chat_conversationsCreationAttributes } from "./chat_conversations";
import { chat_messages as _chat_messages } from "./chat_messages";
import type { chat_messagesAttributes, chat_messagesCreationAttributes } from "./chat_messages";
import { chat_reactions as _chat_reactions } from "./chat_reactions";
import type { chat_reactionsAttributes, chat_reactionsCreationAttributes } from "./chat_reactions";
import { communities as _communities } from "./communities";
import type { communitiesAttributes, communitiesCreationAttributes } from "./communities";
import { community_audit_action_type as _community_audit_action_type } from "./community_audit_action_type";
import type { community_audit_action_typeAttributes, community_audit_action_typeCreationAttributes } from "./community_audit_action_type";
import { community_audit_logs as _community_audit_logs } from "./community_audit_logs";
import type { community_audit_logsAttributes, community_audit_logsCreationAttributes } from "./community_audit_logs";
import { community_gamification_settings as _community_gamification_settings } from "./community_gamification_settings";
import type { community_gamification_settingsAttributes, community_gamification_settingsCreationAttributes } from "./community_gamification_settings";
import { community_links as _community_links } from "./community_links";
import type { community_linksAttributes, community_linksCreationAttributes } from "./community_links";
import { community_member_role as _community_member_role } from "./community_member_role";
import type { community_member_roleAttributes, community_member_roleCreationAttributes } from "./community_member_role";
import { community_member_status as _community_member_status } from "./community_member_status";
import type { community_member_statusAttributes, community_member_statusCreationAttributes } from "./community_member_status";
import { community_members as _community_members } from "./community_members";
import type { community_membersAttributes, community_membersCreationAttributes } from "./community_members";
import { community_navigation_links as _community_navigation_links } from "./community_navigation_links";
import type { community_navigation_linksAttributes, community_navigation_linksCreationAttributes } from "./community_navigation_links";
import { community_permissions as _community_permissions } from "./community_permissions";
import type { community_permissionsAttributes, community_permissionsCreationAttributes } from "./community_permissions";
import { community_topics as _community_topics } from "./community_topics";
import type { community_topicsAttributes, community_topicsCreationAttributes } from "./community_topics";
import { course_access_visibility as _course_access_visibility } from "./course_access_visibility";
import type { course_access_visibilityAttributes, course_access_visibilityCreationAttributes } from "./course_access_visibility";
import { course_enrollments as _course_enrollments } from "./course_enrollments";
import type { course_enrollmentsAttributes, course_enrollmentsCreationAttributes } from "./course_enrollments";
import { course_execution as _course_execution } from "./course_execution";
import type { course_executionAttributes, course_executionCreationAttributes } from "./course_execution";
import { course_lesson_comments as _course_lesson_comments } from "./course_lesson_comments";
import type { course_lesson_commentsAttributes, course_lesson_commentsCreationAttributes } from "./course_lesson_comments";
import { course_lesson_completions as _course_lesson_completions } from "./course_lesson_completions";
import type { course_lesson_completionsAttributes, course_lesson_completionsCreationAttributes } from "./course_lesson_completions";
import { course_lesson_default_tab as _course_lesson_default_tab } from "./course_lesson_default_tab";
import type { course_lesson_default_tabAttributes, course_lesson_default_tabCreationAttributes } from "./course_lesson_default_tab";
import { course_lesson_files as _course_lesson_files } from "./course_lesson_files";
import type { course_lesson_filesAttributes, course_lesson_filesCreationAttributes } from "./course_lesson_files";
import { course_lesson_status as _course_lesson_status } from "./course_lesson_status";
import type { course_lesson_statusAttributes, course_lesson_statusCreationAttributes } from "./course_lesson_status";
import { course_lessons as _course_lessons } from "./course_lessons";
import type { course_lessonsAttributes, course_lessonsCreationAttributes } from "./course_lessons";
import { course_question_type as _course_question_type } from "./course_question_type";
import type { course_question_typeAttributes, course_question_typeCreationAttributes } from "./course_question_type";
import { course_quiz_answers as _course_quiz_answers } from "./course_quiz_answers";
import type { course_quiz_answersAttributes, course_quiz_answersCreationAttributes } from "./course_quiz_answers";
import { course_quiz_questions as _course_quiz_questions } from "./course_quiz_questions";
import type { course_quiz_questionsAttributes, course_quiz_questionsCreationAttributes } from "./course_quiz_questions";
import { course_quiz_submissions as _course_quiz_submissions } from "./course_quiz_submissions";
import type { course_quiz_submissionsAttributes, course_quiz_submissionsCreationAttributes } from "./course_quiz_submissions";
import { course_quizzes as _course_quizzes } from "./course_quizzes";
import type { course_quizzesAttributes, course_quizzesCreationAttributes } from "./course_quizzes";
import { course_sections as _course_sections } from "./course_sections";
import type { course_sectionsAttributes, course_sectionsCreationAttributes } from "./course_sections";
import { course_waitlist as _course_waitlist } from "./course_waitlist";
import type { course_waitlistAttributes, course_waitlistCreationAttributes } from "./course_waitlist";
import { event_instances as _event_instances } from "./event_instances";
import type { event_instancesAttributes, event_instancesCreationAttributes } from "./event_instances";
import { event_invitations as _event_invitations } from "./event_invitations";
import type { event_invitationsAttributes, event_invitationsCreationAttributes } from "./event_invitations";
import { event_invitations_status as _event_invitations_status } from "./event_invitations_status";
import type { event_invitations_statusAttributes, event_invitations_statusCreationAttributes } from "./event_invitations_status";
import { event_registration_status as _event_registration_status } from "./event_registration_status";
import type { event_registration_statusAttributes, event_registration_statusCreationAttributes } from "./event_registration_status";
import { event_registration_type as _event_registration_type } from "./event_registration_type";
import type { event_registration_typeAttributes, event_registration_typeCreationAttributes } from "./event_registration_type";
import { event_registrations as _event_registrations } from "./event_registrations";
import type { event_registrationsAttributes, event_registrationsCreationAttributes } from "./event_registrations";
import { image_post_likes as _image_post_likes } from "./image_post_likes";
import type { image_post_likesAttributes, image_post_likesCreationAttributes } from "./image_post_likes";
import { images_for_space as _images_for_space } from "./images_for_space";
import type { images_for_spaceAttributes, images_for_spaceCreationAttributes } from "./images_for_space";
import { leaderboard_levels as _leaderboard_levels } from "./leaderboard_levels";
import type { leaderboard_levelsAttributes, leaderboard_levelsCreationAttributes } from "./leaderboard_levels";
import { leaderboard_member_status as _leaderboard_member_status } from "./leaderboard_member_status";
import type { leaderboard_member_statusAttributes, leaderboard_member_statusCreationAttributes } from "./leaderboard_member_status";
import { leaderboard_reward_type as _leaderboard_reward_type } from "./leaderboard_reward_type";
import type { leaderboard_reward_typeAttributes, leaderboard_reward_typeCreationAttributes } from "./leaderboard_reward_type";
import { leaderboard_rewards as _leaderboard_rewards } from "./leaderboard_rewards";
import type { leaderboard_rewardsAttributes, leaderboard_rewardsCreationAttributes } from "./leaderboard_rewards";
import { lesson_file_type as _lesson_file_type } from "./lesson_file_type";
import type { lesson_file_typeAttributes, lesson_file_typeCreationAttributes } from "./lesson_file_type";
import { member_levels as _member_levels } from "./member_levels";
import type { member_levelsAttributes, member_levelsCreationAttributes } from "./member_levels";
import { member_points as _member_points } from "./member_points";
import type { member_pointsAttributes, member_pointsCreationAttributes } from "./member_points";
import { member_rewards as _member_rewards } from "./member_rewards";
import type { member_rewardsAttributes, member_rewardsCreationAttributes } from "./member_rewards";
import { members as _members } from "./members";
import type { membersAttributes, membersCreationAttributes } from "./members";
import { notification_type as _notification_type } from "./notification_type";
import type { notification_typeAttributes, notification_typeCreationAttributes } from "./notification_type";
import { notifications as _notifications } from "./notifications";
import type { notificationsAttributes, notificationsCreationAttributes } from "./notifications";
import { permission_key as _permission_key } from "./permission_key";
import type { permission_keyAttributes, permission_keyCreationAttributes } from "./permission_key";
import { pinned_conversations as _pinned_conversations } from "./pinned_conversations";
import type { pinned_conversationsAttributes, pinned_conversationsCreationAttributes } from "./pinned_conversations";
import { quiz_submission_answers as _quiz_submission_answers } from "./quiz_submission_answers";
import type { quiz_submission_answersAttributes, quiz_submission_answersCreationAttributes } from "./quiz_submission_answers";
import { space_access_level as _space_access_level } from "./space_access_level";
import type { space_access_levelAttributes, space_access_levelCreationAttributes } from "./space_access_level";
import { space_chat as _space_chat } from "./space_chat";
import type { space_chatAttributes, space_chatCreationAttributes } from "./space_chat";
import { space_chat_bookmarks as _space_chat_bookmarks } from "./space_chat_bookmarks";
import type { space_chat_bookmarksAttributes, space_chat_bookmarksCreationAttributes } from "./space_chat_bookmarks";
import { space_chat_mentions as _space_chat_mentions } from "./space_chat_mentions";
import type { space_chat_mentionsAttributes, space_chat_mentionsCreationAttributes } from "./space_chat_mentions";
import { space_chat_reactions as _space_chat_reactions } from "./space_chat_reactions";
import type { space_chat_reactionsAttributes, space_chat_reactionsCreationAttributes } from "./space_chat_reactions";
import { space_course_topics as _space_course_topics } from "./space_course_topics";
import type { space_course_topicsAttributes, space_course_topicsCreationAttributes } from "./space_course_topics";
import { space_courses as _space_courses } from "./space_courses";
import type { space_coursesAttributes, space_coursesCreationAttributes } from "./space_courses";
import { space_event_mode as _space_event_mode } from "./space_event_mode";
import type { space_event_modeAttributes, space_event_modeCreationAttributes } from "./space_event_mode";
import { space_event_recuring_mode as _space_event_recuring_mode } from "./space_event_recuring_mode";
import type { space_event_recuring_modeAttributes, space_event_recuring_modeCreationAttributes } from "./space_event_recuring_mode";
import { space_event_topics as _space_event_topics } from "./space_event_topics";
import type { space_event_topicsAttributes, space_event_topicsCreationAttributes } from "./space_event_topics";
import { space_events as _space_events } from "./space_events";
import type { space_eventsAttributes, space_eventsCreationAttributes } from "./space_events";
import { space_filter_topics as _space_filter_topics } from "./space_filter_topics";
import type { space_filter_topicsAttributes, space_filter_topicsCreationAttributes } from "./space_filter_topics";
import { space_group_members as _space_group_members } from "./space_group_members";
import type { space_group_membersAttributes, space_group_membersCreationAttributes } from "./space_group_members";
import { space_groups as _space_groups } from "./space_groups";
import type { space_groupsAttributes, space_groupsCreationAttributes } from "./space_groups";
import { space_image_bookmarks as _space_image_bookmarks } from "./space_image_bookmarks";
import type { space_image_bookmarksAttributes, space_image_bookmarksCreationAttributes } from "./space_image_bookmarks";
import { space_image_comment_likes as _space_image_comment_likes } from "./space_image_comment_likes";
import type { space_image_comment_likesAttributes, space_image_comment_likesCreationAttributes } from "./space_image_comment_likes";
import { space_image_comments as _space_image_comments } from "./space_image_comments";
import type { space_image_commentsAttributes, space_image_commentsCreationAttributes } from "./space_image_comments";
import { space_image_followers as _space_image_followers } from "./space_image_followers";
import type { space_image_followersAttributes, space_image_followersCreationAttributes } from "./space_image_followers";
import { space_image_topics as _space_image_topics } from "./space_image_topics";
import type { space_image_topicsAttributes, space_image_topicsCreationAttributes } from "./space_image_topics";
import { space_images as _space_images } from "./space_images";
import type { space_imagesAttributes, space_imagesCreationAttributes } from "./space_images";
import { space_links as _space_links } from "./space_links";
import type { space_linksAttributes, space_linksCreationAttributes } from "./space_links";
import { space_links_folder as _space_links_folder } from "./space_links_folder";
import type { space_links_folderAttributes, space_links_folderCreationAttributes } from "./space_links_folder";
import { space_member_status as _space_member_status } from "./space_member_status";
import type { space_member_statusAttributes, space_member_statusCreationAttributes } from "./space_member_status";
import { space_members as _space_members } from "./space_members";
import type { space_membersAttributes, space_membersCreationAttributes } from "./space_members";
import { space_post_bookmarks as _space_post_bookmarks } from "./space_post_bookmarks";
import type { space_post_bookmarksAttributes, space_post_bookmarksCreationAttributes } from "./space_post_bookmarks";
import { space_post_comment_likes as _space_post_comment_likes } from "./space_post_comment_likes";
import type { space_post_comment_likesAttributes, space_post_comment_likesCreationAttributes } from "./space_post_comment_likes";
import { space_post_comments as _space_post_comments } from "./space_post_comments";
import type { space_post_commentsAttributes, space_post_commentsCreationAttributes } from "./space_post_comments";
import { space_post_followers as _space_post_followers } from "./space_post_followers";
import type { space_post_followersAttributes, space_post_followersCreationAttributes } from "./space_post_followers";
import { space_post_likes as _space_post_likes } from "./space_post_likes";
import type { space_post_likesAttributes, space_post_likesCreationAttributes } from "./space_post_likes";
import { space_posts as _space_posts } from "./space_posts";
import type { space_postsAttributes, space_postsCreationAttributes } from "./space_posts";
import { space_posts_topics as _space_posts_topics } from "./space_posts_topics";
import type { space_posts_topicsAttributes, space_posts_topicsCreationAttributes } from "./space_posts_topics";
import { space_settings as _space_settings } from "./space_settings";
import type { space_settingsAttributes, space_settingsCreationAttributes } from "./space_settings";
import { space_type as _space_type } from "./space_type";
import type { space_typeAttributes, space_typeCreationAttributes } from "./space_type";
import { space_viewing_layout as _space_viewing_layout } from "./space_viewing_layout";
import type { space_viewing_layoutAttributes, space_viewing_layoutCreationAttributes } from "./space_viewing_layout";
import { spaces as _spaces } from "./spaces";
import type { spacesAttributes, spacesCreationAttributes } from "./spaces";
import { tab_visibility_status as _tab_visibility_status } from "./tab_visibility_status";
import type { tab_visibility_statusAttributes, tab_visibility_statusCreationAttributes } from "./tab_visibility_status";

export {
  _access_group_members as access_group_members,
  _access_group_spaces as access_group_spaces,
  _access_groups as access_groups,
  _access_groups_status as access_groups_status,
  _chat_conversations as chat_conversations,
  _chat_messages as chat_messages,
  _chat_reactions as chat_reactions,
  _communities as communities,
  _community_audit_action_type as community_audit_action_type,
  _community_audit_logs as community_audit_logs,
  _community_gamification_settings as community_gamification_settings,
  _community_links as community_links,
  _community_member_role as community_member_role,
  _community_member_status as community_member_status,
  _community_members as community_members,
  _community_navigation_links as community_navigation_links,
  _community_permissions as community_permissions,
  _community_topics as community_topics,
  _course_access_visibility as course_access_visibility,
  _course_enrollments as course_enrollments,
  _course_execution as course_execution,
  _course_lesson_comments as course_lesson_comments,
  _course_lesson_completions as course_lesson_completions,
  _course_lesson_default_tab as course_lesson_default_tab,
  _course_lesson_files as course_lesson_files,
  _course_lesson_status as course_lesson_status,
  _course_lessons as course_lessons,
  _course_question_type as course_question_type,
  _course_quiz_answers as course_quiz_answers,
  _course_quiz_questions as course_quiz_questions,
  _course_quiz_submissions as course_quiz_submissions,
  _course_quizzes as course_quizzes,
  _course_sections as course_sections,
  _course_waitlist as course_waitlist,
  _event_instances as event_instances,
  _event_invitations as event_invitations,
  _event_invitations_status as event_invitations_status,
  _event_registration_status as event_registration_status,
  _event_registration_type as event_registration_type,
  _event_registrations as event_registrations,
  _image_post_likes as image_post_likes,
  _images_for_space as images_for_space,
  _leaderboard_levels as leaderboard_levels,
  _leaderboard_member_status as leaderboard_member_status,
  _leaderboard_reward_type as leaderboard_reward_type,
  _leaderboard_rewards as leaderboard_rewards,
  _lesson_file_type as lesson_file_type,
  _member_levels as member_levels,
  _member_points as member_points,
  _member_rewards as member_rewards,
  _members as members,
  _notification_type as notification_type,
  _notifications as notifications,
  _permission_key as permission_key,
  _pinned_conversations as pinned_conversations,
  _quiz_submission_answers as quiz_submission_answers,
  _space_access_level as space_access_level,
  _space_chat as space_chat,
  _space_chat_bookmarks as space_chat_bookmarks,
  _space_chat_mentions as space_chat_mentions,
  _space_chat_reactions as space_chat_reactions,
  _space_course_topics as space_course_topics,
  _space_courses as space_courses,
  _space_event_mode as space_event_mode,
  _space_event_recuring_mode as space_event_recuring_mode,
  _space_event_topics as space_event_topics,
  _space_events as space_events,
  _space_filter_topics as space_filter_topics,
  _space_group_members as space_group_members,
  _space_groups as space_groups,
  _space_image_bookmarks as space_image_bookmarks,
  _space_image_comment_likes as space_image_comment_likes,
  _space_image_comments as space_image_comments,
  _space_image_followers as space_image_followers,
  _space_image_topics as space_image_topics,
  _space_images as space_images,
  _space_links as space_links,
  _space_links_folder as space_links_folder,
  _space_member_status as space_member_status,
  _space_members as space_members,
  _space_post_bookmarks as space_post_bookmarks,
  _space_post_comment_likes as space_post_comment_likes,
  _space_post_comments as space_post_comments,
  _space_post_followers as space_post_followers,
  _space_post_likes as space_post_likes,
  _space_posts as space_posts,
  _space_posts_topics as space_posts_topics,
  _space_settings as space_settings,
  _space_type as space_type,
  _space_viewing_layout as space_viewing_layout,
  _spaces as spaces,
  _tab_visibility_status as tab_visibility_status,
};

export type {
  access_group_membersAttributes,
  access_group_membersCreationAttributes,
  access_group_spacesAttributes,
  access_group_spacesCreationAttributes,
  access_groupsAttributes,
  access_groupsCreationAttributes,
  access_groups_statusAttributes,
  access_groups_statusCreationAttributes,
  chat_conversationsAttributes,
  chat_conversationsCreationAttributes,
  chat_messagesAttributes,
  chat_messagesCreationAttributes,
  chat_reactionsAttributes,
  chat_reactionsCreationAttributes,
  communitiesAttributes,
  communitiesCreationAttributes,
  community_audit_action_typeAttributes,
  community_audit_action_typeCreationAttributes,
  community_audit_logsAttributes,
  community_audit_logsCreationAttributes,
  community_gamification_settingsAttributes,
  community_gamification_settingsCreationAttributes,
  community_linksAttributes,
  community_linksCreationAttributes,
  community_member_roleAttributes,
  community_member_roleCreationAttributes,
  community_member_statusAttributes,
  community_member_statusCreationAttributes,
  community_membersAttributes,
  community_membersCreationAttributes,
  community_navigation_linksAttributes,
  community_navigation_linksCreationAttributes,
  community_permissionsAttributes,
  community_permissionsCreationAttributes,
  community_topicsAttributes,
  community_topicsCreationAttributes,
  course_access_visibilityAttributes,
  course_access_visibilityCreationAttributes,
  course_enrollmentsAttributes,
  course_enrollmentsCreationAttributes,
  course_executionAttributes,
  course_executionCreationAttributes,
  course_lesson_commentsAttributes,
  course_lesson_commentsCreationAttributes,
  course_lesson_completionsAttributes,
  course_lesson_completionsCreationAttributes,
  course_lesson_default_tabAttributes,
  course_lesson_default_tabCreationAttributes,
  course_lesson_filesAttributes,
  course_lesson_filesCreationAttributes,
  course_lesson_statusAttributes,
  course_lesson_statusCreationAttributes,
  course_lessonsAttributes,
  course_lessonsCreationAttributes,
  course_question_typeAttributes,
  course_question_typeCreationAttributes,
  course_quiz_answersAttributes,
  course_quiz_answersCreationAttributes,
  course_quiz_questionsAttributes,
  course_quiz_questionsCreationAttributes,
  course_quiz_submissionsAttributes,
  course_quiz_submissionsCreationAttributes,
  course_quizzesAttributes,
  course_quizzesCreationAttributes,
  course_sectionsAttributes,
  course_sectionsCreationAttributes,
  course_waitlistAttributes,
  course_waitlistCreationAttributes,
  event_instancesAttributes,
  event_instancesCreationAttributes,
  event_invitationsAttributes,
  event_invitationsCreationAttributes,
  event_invitations_statusAttributes,
  event_invitations_statusCreationAttributes,
  event_registration_statusAttributes,
  event_registration_statusCreationAttributes,
  event_registration_typeAttributes,
  event_registration_typeCreationAttributes,
  event_registrationsAttributes,
  event_registrationsCreationAttributes,
  image_post_likesAttributes,
  image_post_likesCreationAttributes,
  images_for_spaceAttributes,
  images_for_spaceCreationAttributes,
  leaderboard_levelsAttributes,
  leaderboard_levelsCreationAttributes,
  leaderboard_member_statusAttributes,
  leaderboard_member_statusCreationAttributes,
  leaderboard_reward_typeAttributes,
  leaderboard_reward_typeCreationAttributes,
  leaderboard_rewardsAttributes,
  leaderboard_rewardsCreationAttributes,
  lesson_file_typeAttributes,
  lesson_file_typeCreationAttributes,
  member_levelsAttributes,
  member_levelsCreationAttributes,
  member_pointsAttributes,
  member_pointsCreationAttributes,
  member_rewardsAttributes,
  member_rewardsCreationAttributes,
  membersAttributes,
  membersCreationAttributes,
  notification_typeAttributes,
  notification_typeCreationAttributes,
  notificationsAttributes,
  notificationsCreationAttributes,
  permission_keyAttributes,
  permission_keyCreationAttributes,
  pinned_conversationsAttributes,
  pinned_conversationsCreationAttributes,
  quiz_submission_answersAttributes,
  quiz_submission_answersCreationAttributes,
  space_access_levelAttributes,
  space_access_levelCreationAttributes,
  space_chatAttributes,
  space_chatCreationAttributes,
  space_chat_bookmarksAttributes,
  space_chat_bookmarksCreationAttributes,
  space_chat_mentionsAttributes,
  space_chat_mentionsCreationAttributes,
  space_chat_reactionsAttributes,
  space_chat_reactionsCreationAttributes,
  space_course_topicsAttributes,
  space_course_topicsCreationAttributes,
  space_coursesAttributes,
  space_coursesCreationAttributes,
  space_event_modeAttributes,
  space_event_modeCreationAttributes,
  space_event_recuring_modeAttributes,
  space_event_recuring_modeCreationAttributes,
  space_event_topicsAttributes,
  space_event_topicsCreationAttributes,
  space_eventsAttributes,
  space_eventsCreationAttributes,
  space_filter_topicsAttributes,
  space_filter_topicsCreationAttributes,
  space_group_membersAttributes,
  space_group_membersCreationAttributes,
  space_groupsAttributes,
  space_groupsCreationAttributes,
  space_image_bookmarksAttributes,
  space_image_bookmarksCreationAttributes,
  space_image_comment_likesAttributes,
  space_image_comment_likesCreationAttributes,
  space_image_commentsAttributes,
  space_image_commentsCreationAttributes,
  space_image_followersAttributes,
  space_image_followersCreationAttributes,
  space_image_topicsAttributes,
  space_image_topicsCreationAttributes,
  space_imagesAttributes,
  space_imagesCreationAttributes,
  space_linksAttributes,
  space_linksCreationAttributes,
  space_links_folderAttributes,
  space_links_folderCreationAttributes,
  space_member_statusAttributes,
  space_member_statusCreationAttributes,
  space_membersAttributes,
  space_membersCreationAttributes,
  space_post_bookmarksAttributes,
  space_post_bookmarksCreationAttributes,
  space_post_comment_likesAttributes,
  space_post_comment_likesCreationAttributes,
  space_post_commentsAttributes,
  space_post_commentsCreationAttributes,
  space_post_followersAttributes,
  space_post_followersCreationAttributes,
  space_post_likesAttributes,
  space_post_likesCreationAttributes,
  space_postsAttributes,
  space_postsCreationAttributes,
  space_posts_topicsAttributes,
  space_posts_topicsCreationAttributes,
  space_settingsAttributes,
  space_settingsCreationAttributes,
  space_typeAttributes,
  space_typeCreationAttributes,
  space_viewing_layoutAttributes,
  space_viewing_layoutCreationAttributes,
  spacesAttributes,
  spacesCreationAttributes,
  tab_visibility_statusAttributes,
  tab_visibility_statusCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const access_group_members = _access_group_members.initModel(sequelize);
  const access_group_spaces = _access_group_spaces.initModel(sequelize);
  const access_groups = _access_groups.initModel(sequelize);
  const access_groups_status = _access_groups_status.initModel(sequelize);
  const chat_conversations = _chat_conversations.initModel(sequelize);
  const chat_messages = _chat_messages.initModel(sequelize);
  const chat_reactions = _chat_reactions.initModel(sequelize);
  const communities = _communities.initModel(sequelize);
  const community_audit_action_type = _community_audit_action_type.initModel(sequelize);
  const community_audit_logs = _community_audit_logs.initModel(sequelize);
  const community_gamification_settings = _community_gamification_settings.initModel(sequelize);
  const community_links = _community_links.initModel(sequelize);
  const community_member_role = _community_member_role.initModel(sequelize);
  const community_member_status = _community_member_status.initModel(sequelize);
  const community_members = _community_members.initModel(sequelize);
  const community_navigation_links = _community_navigation_links.initModel(sequelize);
  const community_permissions = _community_permissions.initModel(sequelize);
  const community_topics = _community_topics.initModel(sequelize);
  const course_access_visibility = _course_access_visibility.initModel(sequelize);
  const course_enrollments = _course_enrollments.initModel(sequelize);
  const course_execution = _course_execution.initModel(sequelize);
  const course_lesson_comments = _course_lesson_comments.initModel(sequelize);
  const course_lesson_completions = _course_lesson_completions.initModel(sequelize);
  const course_lesson_default_tab = _course_lesson_default_tab.initModel(sequelize);
  const course_lesson_files = _course_lesson_files.initModel(sequelize);
  const course_lesson_status = _course_lesson_status.initModel(sequelize);
  const course_lessons = _course_lessons.initModel(sequelize);
  const course_question_type = _course_question_type.initModel(sequelize);
  const course_quiz_answers = _course_quiz_answers.initModel(sequelize);
  const course_quiz_questions = _course_quiz_questions.initModel(sequelize);
  const course_quiz_submissions = _course_quiz_submissions.initModel(sequelize);
  const course_quizzes = _course_quizzes.initModel(sequelize);
  const course_sections = _course_sections.initModel(sequelize);
  const course_waitlist = _course_waitlist.initModel(sequelize);
  const event_instances = _event_instances.initModel(sequelize);
  const event_invitations = _event_invitations.initModel(sequelize);
  const event_invitations_status = _event_invitations_status.initModel(sequelize);
  const event_registration_status = _event_registration_status.initModel(sequelize);
  const event_registration_type = _event_registration_type.initModel(sequelize);
  const event_registrations = _event_registrations.initModel(sequelize);
  const image_post_likes = _image_post_likes.initModel(sequelize);
  const images_for_space = _images_for_space.initModel(sequelize);
  const leaderboard_levels = _leaderboard_levels.initModel(sequelize);
  const leaderboard_member_status = _leaderboard_member_status.initModel(sequelize);
  const leaderboard_reward_type = _leaderboard_reward_type.initModel(sequelize);
  const leaderboard_rewards = _leaderboard_rewards.initModel(sequelize);
  const lesson_file_type = _lesson_file_type.initModel(sequelize);
  const member_levels = _member_levels.initModel(sequelize);
  const member_points = _member_points.initModel(sequelize);
  const member_rewards = _member_rewards.initModel(sequelize);
  const members = _members.initModel(sequelize);
  const notification_type = _notification_type.initModel(sequelize);
  const notifications = _notifications.initModel(sequelize);
  const permission_key = _permission_key.initModel(sequelize);
  const pinned_conversations = _pinned_conversations.initModel(sequelize);
  const quiz_submission_answers = _quiz_submission_answers.initModel(sequelize);
  const space_access_level = _space_access_level.initModel(sequelize);
  const space_chat = _space_chat.initModel(sequelize);
  const space_chat_bookmarks = _space_chat_bookmarks.initModel(sequelize);
  const space_chat_mentions = _space_chat_mentions.initModel(sequelize);
  const space_chat_reactions = _space_chat_reactions.initModel(sequelize);
  const space_course_topics = _space_course_topics.initModel(sequelize);
  const space_courses = _space_courses.initModel(sequelize);
  const space_event_mode = _space_event_mode.initModel(sequelize);
  const space_event_recuring_mode = _space_event_recuring_mode.initModel(sequelize);
  const space_event_topics = _space_event_topics.initModel(sequelize);
  const space_events = _space_events.initModel(sequelize);
  const space_filter_topics = _space_filter_topics.initModel(sequelize);
  const space_group_members = _space_group_members.initModel(sequelize);
  const space_groups = _space_groups.initModel(sequelize);
  const space_image_bookmarks = _space_image_bookmarks.initModel(sequelize);
  const space_image_comment_likes = _space_image_comment_likes.initModel(sequelize);
  const space_image_comments = _space_image_comments.initModel(sequelize);
  const space_image_followers = _space_image_followers.initModel(sequelize);
  const space_image_topics = _space_image_topics.initModel(sequelize);
  const space_images = _space_images.initModel(sequelize);
  const space_links = _space_links.initModel(sequelize);
  const space_links_folder = _space_links_folder.initModel(sequelize);
  const space_member_status = _space_member_status.initModel(sequelize);
  const space_members = _space_members.initModel(sequelize);
  const space_post_bookmarks = _space_post_bookmarks.initModel(sequelize);
  const space_post_comment_likes = _space_post_comment_likes.initModel(sequelize);
  const space_post_comments = _space_post_comments.initModel(sequelize);
  const space_post_followers = _space_post_followers.initModel(sequelize);
  const space_post_likes = _space_post_likes.initModel(sequelize);
  const space_posts = _space_posts.initModel(sequelize);
  const space_posts_topics = _space_posts_topics.initModel(sequelize);
  const space_settings = _space_settings.initModel(sequelize);
  const space_type = _space_type.initModel(sequelize);
  const space_viewing_layout = _space_viewing_layout.initModel(sequelize);
  const spaces = _spaces.initModel(sequelize);
  const tab_visibility_status = _tab_visibility_status.initModel(sequelize);

  community_topics.belongsToMany(space_courses, { as: 'space_cource_id_space_courses', through: space_course_topics, foreignKey: "community_topics_id", otherKey: "space_cource_id" });
  community_topics.belongsToMany(space_events, { as: 'space_event_id_space_events', through: space_event_topics, foreignKey: "community_topics_id", otherKey: "space_event_id" });
  community_topics.belongsToMany(space_images, { as: 'space_image_id_space_images', through: space_image_topics, foreignKey: "community_topics_id", otherKey: "space_image_id" });
  community_topics.belongsToMany(space_posts, { as: 'space_post_id_space_posts', through: space_posts_topics, foreignKey: "community_topics_id", otherKey: "space_post_id" });
  space_courses.belongsToMany(community_topics, { as: 'community_topics_id_community_topics', through: space_course_topics, foreignKey: "space_cource_id", otherKey: "community_topics_id" });
  space_events.belongsToMany(community_topics, { as: 'community_topics_id_community_topics_space_event_topics', through: space_event_topics, foreignKey: "space_event_id", otherKey: "community_topics_id" });
  space_images.belongsToMany(community_topics, { as: 'community_topics_id_community_topics_space_image_topics', through: space_image_topics, foreignKey: "space_image_id", otherKey: "community_topics_id" });
  space_posts.belongsToMany(community_topics, { as: 'community_topics_id_community_topics_space_posts_topics', through: space_posts_topics, foreignKey: "space_post_id", otherKey: "community_topics_id" });
  access_group_members.belongsTo(access_groups, { as: "access_group", foreignKey: "access_group_id"});
  access_groups.hasMany(access_group_members, { as: "access_group_members", foreignKey: "access_group_id"});
  access_group_spaces.belongsTo(access_groups, { as: "access_group", foreignKey: "access_group_id"});
  access_groups.hasMany(access_group_spaces, { as: "access_group_spaces", foreignKey: "access_group_id"});
  access_groups.belongsTo(access_groups_status, { as: "status_access_groups_status", foreignKey: "status"});
  access_groups_status.hasMany(access_groups, { as: "access_groups", foreignKey: "status"});
  chat_messages.belongsTo(chat_conversations, { as: "conversation", foreignKey: "conversation_id"});
  chat_conversations.hasMany(chat_messages, { as: "chat_messages", foreignKey: "conversation_id"});
  pinned_conversations.belongsTo(chat_conversations, { as: "conversation", foreignKey: "conversation_id"});
  chat_conversations.hasMany(pinned_conversations, { as: "pinned_conversations", foreignKey: "conversation_id"});
  chat_messages.belongsTo(chat_messages, { as: "parent_message", foreignKey: "parent_message_id"});
  chat_messages.hasMany(chat_messages, { as: "chat_messages", foreignKey: "parent_message_id"});
  chat_reactions.belongsTo(chat_messages, { as: "message", foreignKey: "message_id"});
  chat_messages.hasMany(chat_reactions, { as: "chat_reactions", foreignKey: "message_id"});
  access_groups.belongsTo(communities, { as: "community", foreignKey: "community_id"});
  communities.hasMany(access_groups, { as: "access_groups", foreignKey: "community_id"});
  community_audit_logs.belongsTo(communities, { as: "community", foreignKey: "community_id"});
  communities.hasMany(community_audit_logs, { as: "community_audit_logs", foreignKey: "community_id"});
  community_gamification_settings.belongsTo(communities, { as: "community", foreignKey: "community_id"});
  communities.hasOne(community_gamification_settings, { as: "community_gamification_setting", foreignKey: "community_id"});
  community_links.belongsTo(communities, { as: "community", foreignKey: "community_id"});
  communities.hasMany(community_links, { as: "community_links", foreignKey: "community_id"});
  community_members.belongsTo(communities, { as: "community", foreignKey: "community_id"});
  communities.hasMany(community_members, { as: "community_members", foreignKey: "community_id"});
  community_navigation_links.belongsTo(communities, { as: "community", foreignKey: "community_id"});
  communities.hasMany(community_navigation_links, { as: "community_navigation_links", foreignKey: "community_id"});
  community_permissions.belongsTo(communities, { as: "community", foreignKey: "community_id"});
  communities.hasMany(community_permissions, { as: "community_permissions", foreignKey: "community_id"});
  community_topics.belongsTo(communities, { as: "community", foreignKey: "community_id"});
  communities.hasMany(community_topics, { as: "community_topics", foreignKey: "community_id"});
  leaderboard_levels.belongsTo(communities, { as: "community", foreignKey: "community_id"});
  communities.hasMany(leaderboard_levels, { as: "leaderboard_levels", foreignKey: "community_id"});
  member_points.belongsTo(communities, { as: "community", foreignKey: "community_id"});
  communities.hasMany(member_points, { as: "member_points", foreignKey: "community_id"});
  space_groups.belongsTo(communities, { as: "community", foreignKey: "community_id"});
  communities.hasMany(space_groups, { as: "space_groups", foreignKey: "community_id"});
  space_images.belongsTo(communities, { as: "community", foreignKey: "community_id"});
  communities.hasMany(space_images, { as: "space_images", foreignKey: "community_id"});
  space_posts.belongsTo(communities, { as: "community", foreignKey: "community_id"});
  communities.hasMany(space_posts, { as: "space_posts", foreignKey: "community_id"});
  spaces.belongsTo(communities, { as: "community", foreignKey: "community_id"});
  communities.hasMany(spaces, { as: "spaces", foreignKey: "community_id"});
  community_audit_logs.belongsTo(community_audit_action_type, { as: "action_type_community_audit_action_type", foreignKey: "action_type"});
  community_audit_action_type.hasMany(community_audit_logs, { as: "community_audit_logs", foreignKey: "action_type"});
  community_members.belongsTo(community_member_role, { as: "community_member_role", foreignKey: "community_member_role_id"});
  community_member_role.hasMany(community_members, { as: "community_members", foreignKey: "community_member_role_id"});
  community_permissions.belongsTo(community_member_role, { as: "community_member_role", foreignKey: "community_member_role_id"});
  community_member_role.hasMany(community_permissions, { as: "community_permissions", foreignKey: "community_member_role_id"});
  course_access_visibility.belongsTo(community_member_role, { as: "role_community_member_role", foreignKey: "role"});
  community_member_role.hasMany(course_access_visibility, { as: "course_access_visibilities", foreignKey: "role"});
  community_members.belongsTo(community_member_status, { as: "community_member_status", foreignKey: "community_member_status_id"});
  community_member_status.hasMany(community_members, { as: "community_members", foreignKey: "community_member_status_id"});
  access_group_members.belongsTo(community_members, { as: "member", foreignKey: "member_id"});
  community_members.hasMany(access_group_members, { as: "access_group_members", foreignKey: "member_id"});
  member_levels.belongsTo(community_members, { as: "member", foreignKey: "member_id"});
  community_members.hasOne(member_levels, { as: "member_level", foreignKey: "member_id"});
  member_points.belongsTo(community_members, { as: "member", foreignKey: "member_id"});
  community_members.hasMany(member_points, { as: "member_points", foreignKey: "member_id"});
  member_rewards.belongsTo(community_members, { as: "member", foreignKey: "member_id"});
  community_members.hasMany(member_rewards, { as: "member_rewards", foreignKey: "member_id"});
  space_course_topics.belongsTo(community_topics, { as: "community_topic", foreignKey: "community_topics_id"});
  community_topics.hasMany(space_course_topics, { as: "space_course_topics", foreignKey: "community_topics_id"});
  space_event_topics.belongsTo(community_topics, { as: "community_topic", foreignKey: "community_topics_id"});
  community_topics.hasMany(space_event_topics, { as: "space_event_topics", foreignKey: "community_topics_id"});
  space_filter_topics.belongsTo(community_topics, { as: "topic", foreignKey: "topic_id"});
  community_topics.hasMany(space_filter_topics, { as: "space_filter_topics", foreignKey: "topic_id"});
  space_image_topics.belongsTo(community_topics, { as: "community_topic", foreignKey: "community_topics_id"});
  community_topics.hasMany(space_image_topics, { as: "space_image_topics", foreignKey: "community_topics_id"});
  space_posts_topics.belongsTo(community_topics, { as: "community_topic", foreignKey: "community_topics_id"});
  community_topics.hasMany(space_posts_topics, { as: "space_posts_topics", foreignKey: "community_topics_id"});
  space_courses.belongsTo(course_execution, { as: "course_type_course_execution", foreignKey: "course_type"});
  course_execution.hasMany(space_courses, { as: "space_courses", foreignKey: "course_type"});
  course_lessons.belongsTo(course_lesson_default_tab, { as: "default_tab_course_lesson_default_tab", foreignKey: "default_tab"});
  course_lesson_default_tab.hasMany(course_lessons, { as: "course_lessons", foreignKey: "default_tab"});
  course_lessons.belongsTo(course_lesson_status, { as: "status_course_lesson_status", foreignKey: "status"});
  course_lesson_status.hasMany(course_lessons, { as: "course_lessons", foreignKey: "status"});
  course_enrollments.belongsTo(course_lessons, { as: "last_completed_lesson", foreignKey: "last_completed_lesson_id"});
  course_lessons.hasMany(course_enrollments, { as: "course_enrollments", foreignKey: "last_completed_lesson_id"});
  course_lesson_comments.belongsTo(course_lessons, { as: "lesson", foreignKey: "lesson_id"});
  course_lessons.hasMany(course_lesson_comments, { as: "course_lesson_comments", foreignKey: "lesson_id"});
  course_lesson_completions.belongsTo(course_lessons, { as: "lesson", foreignKey: "lesson_id"});
  course_lessons.hasMany(course_lesson_completions, { as: "course_lesson_completions", foreignKey: "lesson_id"});
  course_lesson_files.belongsTo(course_lessons, { as: "lesson", foreignKey: "lesson_id"});
  course_lessons.hasMany(course_lesson_files, { as: "course_lesson_files", foreignKey: "lesson_id"});
  course_quizzes.belongsTo(course_lessons, { as: "lesson", foreignKey: "lesson_id"});
  course_lessons.hasMany(course_quizzes, { as: "course_quizzes", foreignKey: "lesson_id"});
  course_quiz_questions.belongsTo(course_question_type, { as: "question_type_course_question_type", foreignKey: "question_type"});
  course_question_type.hasMany(course_quiz_questions, { as: "course_quiz_questions", foreignKey: "question_type"});
  quiz_submission_answers.belongsTo(course_quiz_answers, { as: "answer", foreignKey: "answer_id"});
  course_quiz_answers.hasMany(quiz_submission_answers, { as: "quiz_submission_answers", foreignKey: "answer_id"});
  course_quiz_answers.belongsTo(course_quiz_questions, { as: "question", foreignKey: "question_id"});
  course_quiz_questions.hasMany(course_quiz_answers, { as: "course_quiz_answers", foreignKey: "question_id"});
  quiz_submission_answers.belongsTo(course_quiz_questions, { as: "question", foreignKey: "question_id"});
  course_quiz_questions.hasMany(quiz_submission_answers, { as: "quiz_submission_answers", foreignKey: "question_id"});
  quiz_submission_answers.belongsTo(course_quiz_submissions, { as: "submission", foreignKey: "submission_id"});
  course_quiz_submissions.hasMany(quiz_submission_answers, { as: "quiz_submission_answers", foreignKey: "submission_id"});
  course_quiz_questions.belongsTo(course_quizzes, { as: "quiz", foreignKey: "quiz_id"});
  course_quizzes.hasMany(course_quiz_questions, { as: "course_quiz_questions", foreignKey: "quiz_id"});
  course_quiz_submissions.belongsTo(course_quizzes, { as: "quiz", foreignKey: "quiz_id"});
  course_quizzes.hasMany(course_quiz_submissions, { as: "course_quiz_submissions", foreignKey: "quiz_id"});
  course_lessons.belongsTo(course_sections, { as: "section", foreignKey: "section_id"});
  course_sections.hasMany(course_lessons, { as: "course_lessons", foreignKey: "section_id"});
  event_registrations.belongsTo(event_instances, { as: "event_instance", foreignKey: "event_instance_id"});
  event_instances.hasMany(event_registrations, { as: "event_registrations", foreignKey: "event_instance_id"});
  event_invitations.belongsTo(event_invitations_status, { as: "status_event_invitations_status", foreignKey: "status"});
  event_invitations_status.hasMany(event_invitations, { as: "event_invitations", foreignKey: "status"});
  event_registrations.belongsTo(event_registration_status, { as: "status_event_registration_status", foreignKey: "status"});
  event_registration_status.hasMany(event_registrations, { as: "event_registrations", foreignKey: "status"});
  event_registrations.belongsTo(event_registration_type, { as: "registration_type_event_registration_type", foreignKey: "registration_type"});
  event_registration_type.hasMany(event_registrations, { as: "event_registrations", foreignKey: "registration_type"});
  leaderboard_rewards.belongsTo(leaderboard_levels, { as: "level", foreignKey: "level_id"});
  leaderboard_levels.hasMany(leaderboard_rewards, { as: "leaderboard_rewards", foreignKey: "level_id"});
  member_levels.belongsTo(leaderboard_levels, { as: "level", foreignKey: "level_id"});
  leaderboard_levels.hasMany(member_levels, { as: "member_levels", foreignKey: "level_id"});
  member_rewards.belongsTo(leaderboard_member_status, { as: "status_leaderboard_member_status", foreignKey: "status"});
  leaderboard_member_status.hasMany(member_rewards, { as: "member_rewards", foreignKey: "status"});
  leaderboard_rewards.belongsTo(leaderboard_reward_type, { as: "reward_type_leaderboard_reward_type", foreignKey: "reward_type"});
  leaderboard_reward_type.hasMany(leaderboard_rewards, { as: "leaderboard_rewards", foreignKey: "reward_type"});
  member_rewards.belongsTo(leaderboard_rewards, { as: "reward", foreignKey: "reward_id"});
  leaderboard_rewards.hasMany(member_rewards, { as: "member_rewards", foreignKey: "reward_id"});
  course_lesson_files.belongsTo(lesson_file_type, { as: "file_type_lesson_file_type", foreignKey: "file_type"});
  lesson_file_type.hasMany(course_lesson_files, { as: "course_lesson_files", foreignKey: "file_type"});
  chat_conversations.belongsTo(members, { as: "member_one", foreignKey: "member_one_id"});
  members.hasMany(chat_conversations, { as: "chat_conversations", foreignKey: "member_one_id"});
  chat_conversations.belongsTo(members, { as: "member_two", foreignKey: "member_two_id"});
  members.hasMany(chat_conversations, { as: "member_two_chat_conversations", foreignKey: "member_two_id"});
  chat_messages.belongsTo(members, { as: "sender", foreignKey: "sender_id"});
  members.hasMany(chat_messages, { as: "chat_messages", foreignKey: "sender_id"});
  chat_reactions.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(chat_reactions, { as: "chat_reactions", foreignKey: "member_id"});
  communities.belongsTo(members, { as: "owner", foreignKey: "owner_id"});
  members.hasMany(communities, { as: "communities", foreignKey: "owner_id"});
  community_audit_logs.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(community_audit_logs, { as: "community_audit_logs", foreignKey: "member_id"});
  community_audit_logs.belongsTo(members, { as: "target_member", foreignKey: "target_member_id"});
  members.hasMany(community_audit_logs, { as: "target_member_community_audit_logs", foreignKey: "target_member_id"});
  community_members.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(community_members, { as: "community_members", foreignKey: "member_id"});
  community_topics.belongsTo(members, { as: "created_by_member", foreignKey: "created_by"});
  members.hasMany(community_topics, { as: "community_topics", foreignKey: "created_by"});
  course_enrollments.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(course_enrollments, { as: "course_enrollments", foreignKey: "member_id"});
  course_lesson_comments.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(course_lesson_comments, { as: "course_lesson_comments", foreignKey: "member_id"});
  course_lesson_completions.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(course_lesson_completions, { as: "course_lesson_completions", foreignKey: "member_id"});
  course_quiz_submissions.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(course_quiz_submissions, { as: "course_quiz_submissions", foreignKey: "member_id"});
  course_waitlist.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(course_waitlist, { as: "course_waitlists", foreignKey: "member_id"});
  event_invitations.belongsTo(members, { as: "invited_by_member", foreignKey: "invited_by"});
  members.hasMany(event_invitations, { as: "event_invitations", foreignKey: "invited_by"});
  event_invitations.belongsTo(members, { as: "invited_member", foreignKey: "invited_member_id"});
  members.hasMany(event_invitations, { as: "invited_member_event_invitations", foreignKey: "invited_member_id"});
  event_registrations.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(event_registrations, { as: "event_registrations", foreignKey: "member_id"});
  image_post_likes.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(image_post_likes, { as: "image_post_likes", foreignKey: "member_id"});
  notifications.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(notifications, { as: "notifications", foreignKey: "member_id"});
  pinned_conversations.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(pinned_conversations, { as: "pinned_conversations", foreignKey: "member_id"});
  space_chat.belongsTo(members, { as: "sender", foreignKey: "sender_id"});
  members.hasMany(space_chat, { as: "space_chats", foreignKey: "sender_id"});
  space_chat_bookmarks.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(space_chat_bookmarks, { as: "space_chat_bookmarks", foreignKey: "member_id"});
  space_chat_mentions.belongsTo(members, { as: "mentioned_member", foreignKey: "mentioned_member_id"});
  members.hasMany(space_chat_mentions, { as: "space_chat_mentions", foreignKey: "mentioned_member_id"});
  space_chat_reactions.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(space_chat_reactions, { as: "space_chat_reactions", foreignKey: "member_id"});
  space_events.belongsTo(members, { as: "host", foreignKey: "host_id"});
  members.hasMany(space_events, { as: "space_events", foreignKey: "host_id"});
  space_group_members.belongsTo(members, { as: "invited_by_member", foreignKey: "invited_by"});
  members.hasMany(space_group_members, { as: "space_group_members", foreignKey: "invited_by"});
  space_group_members.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(space_group_members, { as: "member_space_group_members", foreignKey: "member_id"});
  space_image_bookmarks.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(space_image_bookmarks, { as: "space_image_bookmarks", foreignKey: "member_id"});
  space_image_comment_likes.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(space_image_comment_likes, { as: "space_image_comment_likes", foreignKey: "member_id"});
  space_image_comments.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(space_image_comments, { as: "space_image_comments", foreignKey: "member_id"});
  space_image_followers.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(space_image_followers, { as: "space_image_followers", foreignKey: "member_id"});
  space_images.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(space_images, { as: "space_images", foreignKey: "member_id"});
  space_members.belongsTo(members, { as: "approved_by_member", foreignKey: "approved_by"});
  members.hasMany(space_members, { as: "space_members", foreignKey: "approved_by"});
  space_members.belongsTo(members, { as: "invited_by_member", foreignKey: "invited_by"});
  members.hasMany(space_members, { as: "invited_by_space_members", foreignKey: "invited_by"});
  space_members.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(space_members, { as: "member_space_members", foreignKey: "member_id"});
  space_post_bookmarks.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(space_post_bookmarks, { as: "space_post_bookmarks", foreignKey: "member_id"});
  space_post_comment_likes.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(space_post_comment_likes, { as: "space_post_comment_likes", foreignKey: "member_id"});
  space_post_comments.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(space_post_comments, { as: "space_post_comments", foreignKey: "member_id"});
  space_post_comments.belongsTo(members, { as: "reply_to_member", foreignKey: "reply_to_member_id"});
  members.hasMany(space_post_comments, { as: "reply_to_member_space_post_comments", foreignKey: "reply_to_member_id"});
  space_post_followers.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(space_post_followers, { as: "space_post_followers", foreignKey: "member_id"});
  space_post_likes.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(space_post_likes, { as: "space_post_likes", foreignKey: "member_id"});
  space_posts.belongsTo(members, { as: "member", foreignKey: "member_id"});
  members.hasMany(space_posts, { as: "space_posts", foreignKey: "member_id"});
  spaces.belongsTo(members, { as: "created_by_member", foreignKey: "created_by"});
  members.hasMany(spaces, { as: "spaces", foreignKey: "created_by"});
  notifications.belongsTo(notification_type, { as: "type_notification_type", foreignKey: "type"});
  notification_type.hasMany(notifications, { as: "notifications", foreignKey: "type"});
  community_audit_logs.belongsTo(permission_key, { as: "permission_key_permission_key", foreignKey: "permission_key"});
  permission_key.hasMany(community_audit_logs, { as: "community_audit_logs", foreignKey: "permission_key"});
  community_permissions.belongsTo(permission_key, { as: "permission_key_permission_key", foreignKey: "permission_key"});
  permission_key.hasMany(community_permissions, { as: "community_permissions", foreignKey: "permission_key"});
  spaces.belongsTo(space_access_level, { as: "access_level", foreignKey: "access_level_id"});
  space_access_level.hasMany(spaces, { as: "spaces", foreignKey: "access_level_id"});
  space_chat.belongsTo(space_chat, { as: "parent", foreignKey: "parent_id"});
  space_chat.hasMany(space_chat, { as: "space_chats", foreignKey: "parent_id"});
  space_chat_bookmarks.belongsTo(space_chat, { as: "space_chat", foreignKey: "space_chat_id"});
  space_chat.hasMany(space_chat_bookmarks, { as: "space_chat_bookmarks", foreignKey: "space_chat_id"});
  space_chat_mentions.belongsTo(space_chat, { as: "space_chat", foreignKey: "space_chat_id"});
  space_chat.hasMany(space_chat_mentions, { as: "space_chat_mentions", foreignKey: "space_chat_id"});
  space_chat_reactions.belongsTo(space_chat, { as: "space_chat", foreignKey: "space_chat_id"});
  space_chat.hasMany(space_chat_reactions, { as: "space_chat_reactions", foreignKey: "space_chat_id"});
  course_access_visibility.belongsTo(space_courses, { as: "course", foreignKey: "course_id"});
  space_courses.hasMany(course_access_visibility, { as: "course_access_visibilities", foreignKey: "course_id"});
  course_enrollments.belongsTo(space_courses, { as: "course", foreignKey: "course_id"});
  space_courses.hasMany(course_enrollments, { as: "course_enrollments", foreignKey: "course_id"});
  course_sections.belongsTo(space_courses, { as: "course", foreignKey: "course_id"});
  space_courses.hasMany(course_sections, { as: "course_sections", foreignKey: "course_id"});
  course_waitlist.belongsTo(space_courses, { as: "course", foreignKey: "course_id"});
  space_courses.hasMany(course_waitlist, { as: "course_waitlists", foreignKey: "course_id"});
  space_course_topics.belongsTo(space_courses, { as: "space_cource", foreignKey: "space_cource_id"});
  space_courses.hasMany(space_course_topics, { as: "space_course_topics", foreignKey: "space_cource_id"});
  space_events.belongsTo(space_event_mode, { as: "registration_type_space_event_mode", foreignKey: "registration_type"});
  space_event_mode.hasMany(space_events, { as: "space_events", foreignKey: "registration_type"});
  space_events.belongsTo(space_event_recuring_mode, { as: "repeat_type_space_event_recuring_mode", foreignKey: "repeat_type"});
  space_event_recuring_mode.hasMany(space_events, { as: "space_events", foreignKey: "repeat_type"});
  event_instances.belongsTo(space_events, { as: "space_event", foreignKey: "space_event_id"});
  space_events.hasMany(event_instances, { as: "event_instances", foreignKey: "space_event_id"});
  event_invitations.belongsTo(space_events, { as: "event", foreignKey: "event_id"});
  space_events.hasMany(event_invitations, { as: "event_invitations", foreignKey: "event_id"});
  space_event_topics.belongsTo(space_events, { as: "space_event", foreignKey: "space_event_id"});
  space_events.hasMany(space_event_topics, { as: "space_event_topics", foreignKey: "space_event_id"});
  space_group_members.belongsTo(space_groups, { as: "space_group", foreignKey: "space_group_id"});
  space_groups.hasMany(space_group_members, { as: "space_group_members", foreignKey: "space_group_id"});
  spaces.belongsTo(space_groups, { as: "group", foreignKey: "group_id"});
  space_groups.hasMany(spaces, { as: "spaces", foreignKey: "group_id"});
  space_image_comment_likes.belongsTo(space_image_comments, { as: "space_image_comment", foreignKey: "space_image_comment_id"});
  space_image_comments.hasMany(space_image_comment_likes, { as: "space_image_comment_likes", foreignKey: "space_image_comment_id"});
  space_image_comments.belongsTo(space_image_comments, { as: "parent", foreignKey: "parent_id"});
  space_image_comments.hasMany(space_image_comments, { as: "space_image_comments", foreignKey: "parent_id"});
  image_post_likes.belongsTo(space_images, { as: "space_image", foreignKey: "space_image_id"});
  space_images.hasMany(image_post_likes, { as: "image_post_likes", foreignKey: "space_image_id"});
  space_image_bookmarks.belongsTo(space_images, { as: "space_image", foreignKey: "space_image_id"});
  space_images.hasMany(space_image_bookmarks, { as: "space_image_bookmarks", foreignKey: "space_image_id"});
  space_image_comments.belongsTo(space_images, { as: "space_image", foreignKey: "space_image_id"});
  space_images.hasMany(space_image_comments, { as: "space_image_comments", foreignKey: "space_image_id"});
  space_image_followers.belongsTo(space_images, { as: "space_image", foreignKey: "space_image_id"});
  space_images.hasMany(space_image_followers, { as: "space_image_followers", foreignKey: "space_image_id"});
  space_image_topics.belongsTo(space_images, { as: "space_image", foreignKey: "space_image_id"});
  space_images.hasMany(space_image_topics, { as: "space_image_topics", foreignKey: "space_image_id"});
  space_links.belongsTo(space_links_folder, { as: "space_folder", foreignKey: "space_folder_id"});
  space_links_folder.hasMany(space_links, { as: "space_links", foreignKey: "space_folder_id"});
  space_group_members.belongsTo(space_member_status, { as: "space_member_status", foreignKey: "space_member_status_id"});
  space_member_status.hasMany(space_group_members, { as: "space_group_members", foreignKey: "space_member_status_id"});
  space_members.belongsTo(space_member_status, { as: "space_member_status", foreignKey: "space_member_status_id"});
  space_member_status.hasMany(space_members, { as: "space_members", foreignKey: "space_member_status_id"});
  space_post_comment_likes.belongsTo(space_post_comments, { as: "space_post_comment", foreignKey: "space_post_comment_id"});
  space_post_comments.hasMany(space_post_comment_likes, { as: "space_post_comment_likes", foreignKey: "space_post_comment_id"});
  space_post_comments.belongsTo(space_post_comments, { as: "parent", foreignKey: "parent_id"});
  space_post_comments.hasMany(space_post_comments, { as: "space_post_comments", foreignKey: "parent_id"});
  space_post_bookmarks.belongsTo(space_posts, { as: "space_post", foreignKey: "space_post_id"});
  space_posts.hasMany(space_post_bookmarks, { as: "space_post_bookmarks", foreignKey: "space_post_id"});
  space_post_comments.belongsTo(space_posts, { as: "space_post", foreignKey: "space_post_id"});
  space_posts.hasMany(space_post_comments, { as: "space_post_comments", foreignKey: "space_post_id"});
  space_post_followers.belongsTo(space_posts, { as: "space_post", foreignKey: "space_post_id"});
  space_posts.hasMany(space_post_followers, { as: "space_post_followers", foreignKey: "space_post_id"});
  space_post_likes.belongsTo(space_posts, { as: "space_post", foreignKey: "space_post_id"});
  space_posts.hasMany(space_post_likes, { as: "space_post_likes", foreignKey: "space_post_id"});
  space_posts_topics.belongsTo(space_posts, { as: "space_post", foreignKey: "space_post_id"});
  space_posts.hasMany(space_posts_topics, { as: "space_posts_topics", foreignKey: "space_post_id"});
  spaces.belongsTo(space_type, { as: "space_type", foreignKey: "space_type_id"});
  space_type.hasMany(spaces, { as: "spaces", foreignKey: "space_type_id"});
  space_settings.belongsTo(space_viewing_layout, { as: "space_viewing_layout", foreignKey: "space_viewing_layout_id"});
  space_viewing_layout.hasMany(space_settings, { as: "space_settings", foreignKey: "space_viewing_layout_id"});
  access_group_spaces.belongsTo(spaces, { as: "space", foreignKey: "space_id"});
  spaces.hasMany(access_group_spaces, { as: "access_group_spaces", foreignKey: "space_id"});
  images_for_space.belongsTo(spaces, { as: "space", foreignKey: "space_id"});
  spaces.hasOne(images_for_space, { as: "images_for_space", foreignKey: "space_id"});
  space_chat.belongsTo(spaces, { as: "space", foreignKey: "space_id"});
  spaces.hasMany(space_chat, { as: "space_chats", foreignKey: "space_id"});
  space_courses.belongsTo(spaces, { as: "space", foreignKey: "space_id"});
  spaces.hasMany(space_courses, { as: "space_courses", foreignKey: "space_id"});
  space_events.belongsTo(spaces, { as: "space", foreignKey: "space_id"});
  spaces.hasMany(space_events, { as: "space_events", foreignKey: "space_id"});
  space_filter_topics.belongsTo(spaces, { as: "space", foreignKey: "space_id"});
  spaces.hasMany(space_filter_topics, { as: "space_filter_topics", foreignKey: "space_id"});
  space_images.belongsTo(spaces, { as: "space", foreignKey: "space_id"});
  spaces.hasMany(space_images, { as: "space_images", foreignKey: "space_id"});
  space_links.belongsTo(spaces, { as: "space", foreignKey: "space_id"});
  spaces.hasMany(space_links, { as: "space_links", foreignKey: "space_id"});
  space_links_folder.belongsTo(spaces, { as: "space", foreignKey: "space_id"});
  spaces.hasMany(space_links_folder, { as: "space_links_folders", foreignKey: "space_id"});
  space_members.belongsTo(spaces, { as: "space", foreignKey: "space_id"});
  spaces.hasMany(space_members, { as: "space_members", foreignKey: "space_id"});
  space_posts.belongsTo(spaces, { as: "space", foreignKey: "space_id"});
  spaces.hasMany(space_posts, { as: "space_posts", foreignKey: "space_id"});
  space_settings.belongsTo(spaces, { as: "space", foreignKey: "space_id"});
  spaces.hasOne(space_settings, { as: "space_setting", foreignKey: "space_id"});
  community_navigation_links.belongsTo(tab_visibility_status, { as: "visibility_tab_visibility_status", foreignKey: "visibility"});
  tab_visibility_status.hasMany(community_navigation_links, { as: "community_navigation_links", foreignKey: "visibility"});

  return {
    access_group_members: access_group_members,
    access_group_spaces: access_group_spaces,
    access_groups: access_groups,
    access_groups_status: access_groups_status,
    chat_conversations: chat_conversations,
    chat_messages: chat_messages,
    chat_reactions: chat_reactions,
    communities: communities,
    community_audit_action_type: community_audit_action_type,
    community_audit_logs: community_audit_logs,
    community_gamification_settings: community_gamification_settings,
    community_links: community_links,
    community_member_role: community_member_role,
    community_member_status: community_member_status,
    community_members: community_members,
    community_navigation_links: community_navigation_links,
    community_permissions: community_permissions,
    community_topics: community_topics,
    course_access_visibility: course_access_visibility,
    course_enrollments: course_enrollments,
    course_execution: course_execution,
    course_lesson_comments: course_lesson_comments,
    course_lesson_completions: course_lesson_completions,
    course_lesson_default_tab: course_lesson_default_tab,
    course_lesson_files: course_lesson_files,
    course_lesson_status: course_lesson_status,
    course_lessons: course_lessons,
    course_question_type: course_question_type,
    course_quiz_answers: course_quiz_answers,
    course_quiz_questions: course_quiz_questions,
    course_quiz_submissions: course_quiz_submissions,
    course_quizzes: course_quizzes,
    course_sections: course_sections,
    course_waitlist: course_waitlist,
    event_instances: event_instances,
    event_invitations: event_invitations,
    event_invitations_status: event_invitations_status,
    event_registration_status: event_registration_status,
    event_registration_type: event_registration_type,
    event_registrations: event_registrations,
    image_post_likes: image_post_likes,
    images_for_space: images_for_space,
    leaderboard_levels: leaderboard_levels,
    leaderboard_member_status: leaderboard_member_status,
    leaderboard_reward_type: leaderboard_reward_type,
    leaderboard_rewards: leaderboard_rewards,
    lesson_file_type: lesson_file_type,
    member_levels: member_levels,
    member_points: member_points,
    member_rewards: member_rewards,
    members: members,
    notification_type: notification_type,
    notifications: notifications,
    permission_key: permission_key,
    pinned_conversations: pinned_conversations,
    quiz_submission_answers: quiz_submission_answers,
    space_access_level: space_access_level,
    space_chat: space_chat,
    space_chat_bookmarks: space_chat_bookmarks,
    space_chat_mentions: space_chat_mentions,
    space_chat_reactions: space_chat_reactions,
    space_course_topics: space_course_topics,
    space_courses: space_courses,
    space_event_mode: space_event_mode,
    space_event_recuring_mode: space_event_recuring_mode,
    space_event_topics: space_event_topics,
    space_events: space_events,
    space_filter_topics: space_filter_topics,
    space_group_members: space_group_members,
    space_groups: space_groups,
    space_image_bookmarks: space_image_bookmarks,
    space_image_comment_likes: space_image_comment_likes,
    space_image_comments: space_image_comments,
    space_image_followers: space_image_followers,
    space_image_topics: space_image_topics,
    space_images: space_images,
    space_links: space_links,
    space_links_folder: space_links_folder,
    space_member_status: space_member_status,
    space_members: space_members,
    space_post_bookmarks: space_post_bookmarks,
    space_post_comment_likes: space_post_comment_likes,
    space_post_comments: space_post_comments,
    space_post_followers: space_post_followers,
    space_post_likes: space_post_likes,
    space_posts: space_posts,
    space_posts_topics: space_posts_topics,
    space_settings: space_settings,
    space_type: space_type,
    space_viewing_layout: space_viewing_layout,
    spaces: spaces,
    tab_visibility_status: tab_visibility_status,
  };
}
