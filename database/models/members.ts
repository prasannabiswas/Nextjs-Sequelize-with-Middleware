import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { chat_conversations, chat_conversationsId } from './chat_conversations';
import type { chat_messages, chat_messagesId } from './chat_messages';
import type { chat_reactions, chat_reactionsId } from './chat_reactions';
import type { communities, communitiesId } from './communities';
import type { community_audit_logs, community_audit_logsId } from './community_audit_logs';
import type { community_members, community_membersId } from './community_members';
import type { community_topics, community_topicsId } from './community_topics';
import type { course_enrollments, course_enrollmentsId } from './course_enrollments';
import type { course_lesson_comments, course_lesson_commentsId } from './course_lesson_comments';
import type { course_lesson_completions, course_lesson_completionsId } from './course_lesson_completions';
import type { course_quiz_submissions, course_quiz_submissionsId } from './course_quiz_submissions';
import type { course_waitlist, course_waitlistId } from './course_waitlist';
import type { event_invitations, event_invitationsId } from './event_invitations';
import type { event_registrations, event_registrationsId } from './event_registrations';
import type { image_post_likes, image_post_likesId } from './image_post_likes';
import type { notifications, notificationsId } from './notifications';
import type { pinned_conversations, pinned_conversationsId } from './pinned_conversations';
import type { space_chat, space_chatId } from './space_chat';
import type { space_chat_bookmarks, space_chat_bookmarksId } from './space_chat_bookmarks';
import type { space_chat_mentions, space_chat_mentionsId } from './space_chat_mentions';
import type { space_chat_reactions, space_chat_reactionsId } from './space_chat_reactions';
import type { space_events, space_eventsId } from './space_events';
import type { space_group_members, space_group_membersId } from './space_group_members';
import type { space_image_bookmarks, space_image_bookmarksId } from './space_image_bookmarks';
import type { space_image_comment_likes, space_image_comment_likesId } from './space_image_comment_likes';
import type { space_image_comments, space_image_commentsId } from './space_image_comments';
import type { space_image_followers, space_image_followersId } from './space_image_followers';
import type { space_images, space_imagesId } from './space_images';
import type { space_members, space_membersId } from './space_members';
import type { space_post_bookmarks, space_post_bookmarksId } from './space_post_bookmarks';
import type { space_post_comment_likes, space_post_comment_likesId } from './space_post_comment_likes';
import type { space_post_comments, space_post_commentsId } from './space_post_comments';
import type { space_post_followers, space_post_followersId } from './space_post_followers';
import type { space_post_likes, space_post_likesId } from './space_post_likes';
import type { space_posts, space_postsId } from './space_posts';
import type { spaces, spacesId } from './spaces';

export interface membersAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  mobile_number?: string;
  country_code?: string;
  profile_image_url?: string;
  gender: "male" | "female" | "other" | "prefer_not_to_say";
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  pincode?: string;
  is_online?: boolean;
  last_seen?: Date;
  createdat?: Date;
  updatedat?: Date;
}

export type membersPk = "id";
export type membersId = members[membersPk];
export type membersOptionalAttributes = "id" | "mobile_number" | "country_code" | "profile_image_url" | "address" | "city" | "state" | "country" | "pincode" | "is_online" | "last_seen" | "createdat" | "updatedat";
export type membersCreationAttributes = Optional<membersAttributes, membersOptionalAttributes>;

export class members extends Model<membersAttributes, membersCreationAttributes> implements membersAttributes {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  mobile_number?: string;
  country_code?: string;
  profile_image_url?: string;
  gender!: "male" | "female" | "other" | "prefer_not_to_say";
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  pincode?: string;
  is_online?: boolean;
  last_seen?: Date;
  createdat?: Date;
  updatedat?: Date;

  // members hasMany chat_conversations via member_one_id
  chat_conversations!: chat_conversations[];
  getChat_conversations!: Sequelize.HasManyGetAssociationsMixin<chat_conversations>;
  setChat_conversations!: Sequelize.HasManySetAssociationsMixin<chat_conversations, chat_conversationsId>;
  addChat_conversation!: Sequelize.HasManyAddAssociationMixin<chat_conversations, chat_conversationsId>;
  addChat_conversations!: Sequelize.HasManyAddAssociationsMixin<chat_conversations, chat_conversationsId>;
  createChat_conversation!: Sequelize.HasManyCreateAssociationMixin<chat_conversations>;
  removeChat_conversation!: Sequelize.HasManyRemoveAssociationMixin<chat_conversations, chat_conversationsId>;
  removeChat_conversations!: Sequelize.HasManyRemoveAssociationsMixin<chat_conversations, chat_conversationsId>;
  hasChat_conversation!: Sequelize.HasManyHasAssociationMixin<chat_conversations, chat_conversationsId>;
  hasChat_conversations!: Sequelize.HasManyHasAssociationsMixin<chat_conversations, chat_conversationsId>;
  countChat_conversations!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany chat_conversations via member_two_id
  member_two_chat_conversations!: chat_conversations[];
  getMember_two_chat_conversations!: Sequelize.HasManyGetAssociationsMixin<chat_conversations>;
  setMember_two_chat_conversations!: Sequelize.HasManySetAssociationsMixin<chat_conversations, chat_conversationsId>;
  addMember_two_chat_conversation!: Sequelize.HasManyAddAssociationMixin<chat_conversations, chat_conversationsId>;
  addMember_two_chat_conversations!: Sequelize.HasManyAddAssociationsMixin<chat_conversations, chat_conversationsId>;
  createMember_two_chat_conversation!: Sequelize.HasManyCreateAssociationMixin<chat_conversations>;
  removeMember_two_chat_conversation!: Sequelize.HasManyRemoveAssociationMixin<chat_conversations, chat_conversationsId>;
  removeMember_two_chat_conversations!: Sequelize.HasManyRemoveAssociationsMixin<chat_conversations, chat_conversationsId>;
  hasMember_two_chat_conversation!: Sequelize.HasManyHasAssociationMixin<chat_conversations, chat_conversationsId>;
  hasMember_two_chat_conversations!: Sequelize.HasManyHasAssociationsMixin<chat_conversations, chat_conversationsId>;
  countMember_two_chat_conversations!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany chat_messages via sender_id
  chat_messages!: chat_messages[];
  getChat_messages!: Sequelize.HasManyGetAssociationsMixin<chat_messages>;
  setChat_messages!: Sequelize.HasManySetAssociationsMixin<chat_messages, chat_messagesId>;
  addChat_message!: Sequelize.HasManyAddAssociationMixin<chat_messages, chat_messagesId>;
  addChat_messages!: Sequelize.HasManyAddAssociationsMixin<chat_messages, chat_messagesId>;
  createChat_message!: Sequelize.HasManyCreateAssociationMixin<chat_messages>;
  removeChat_message!: Sequelize.HasManyRemoveAssociationMixin<chat_messages, chat_messagesId>;
  removeChat_messages!: Sequelize.HasManyRemoveAssociationsMixin<chat_messages, chat_messagesId>;
  hasChat_message!: Sequelize.HasManyHasAssociationMixin<chat_messages, chat_messagesId>;
  hasChat_messages!: Sequelize.HasManyHasAssociationsMixin<chat_messages, chat_messagesId>;
  countChat_messages!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany chat_reactions via member_id
  chat_reactions!: chat_reactions[];
  getChat_reactions!: Sequelize.HasManyGetAssociationsMixin<chat_reactions>;
  setChat_reactions!: Sequelize.HasManySetAssociationsMixin<chat_reactions, chat_reactionsId>;
  addChat_reaction!: Sequelize.HasManyAddAssociationMixin<chat_reactions, chat_reactionsId>;
  addChat_reactions!: Sequelize.HasManyAddAssociationsMixin<chat_reactions, chat_reactionsId>;
  createChat_reaction!: Sequelize.HasManyCreateAssociationMixin<chat_reactions>;
  removeChat_reaction!: Sequelize.HasManyRemoveAssociationMixin<chat_reactions, chat_reactionsId>;
  removeChat_reactions!: Sequelize.HasManyRemoveAssociationsMixin<chat_reactions, chat_reactionsId>;
  hasChat_reaction!: Sequelize.HasManyHasAssociationMixin<chat_reactions, chat_reactionsId>;
  hasChat_reactions!: Sequelize.HasManyHasAssociationsMixin<chat_reactions, chat_reactionsId>;
  countChat_reactions!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany communities via owner_id
  communities!: communities[];
  getCommunities!: Sequelize.HasManyGetAssociationsMixin<communities>;
  setCommunities!: Sequelize.HasManySetAssociationsMixin<communities, communitiesId>;
  addCommunity!: Sequelize.HasManyAddAssociationMixin<communities, communitiesId>;
  addCommunities!: Sequelize.HasManyAddAssociationsMixin<communities, communitiesId>;
  createCommunity!: Sequelize.HasManyCreateAssociationMixin<communities>;
  removeCommunity!: Sequelize.HasManyRemoveAssociationMixin<communities, communitiesId>;
  removeCommunities!: Sequelize.HasManyRemoveAssociationsMixin<communities, communitiesId>;
  hasCommunity!: Sequelize.HasManyHasAssociationMixin<communities, communitiesId>;
  hasCommunities!: Sequelize.HasManyHasAssociationsMixin<communities, communitiesId>;
  countCommunities!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany community_audit_logs via member_id
  community_audit_logs!: community_audit_logs[];
  getCommunity_audit_logs!: Sequelize.HasManyGetAssociationsMixin<community_audit_logs>;
  setCommunity_audit_logs!: Sequelize.HasManySetAssociationsMixin<community_audit_logs, community_audit_logsId>;
  addCommunity_audit_log!: Sequelize.HasManyAddAssociationMixin<community_audit_logs, community_audit_logsId>;
  addCommunity_audit_logs!: Sequelize.HasManyAddAssociationsMixin<community_audit_logs, community_audit_logsId>;
  createCommunity_audit_log!: Sequelize.HasManyCreateAssociationMixin<community_audit_logs>;
  removeCommunity_audit_log!: Sequelize.HasManyRemoveAssociationMixin<community_audit_logs, community_audit_logsId>;
  removeCommunity_audit_logs!: Sequelize.HasManyRemoveAssociationsMixin<community_audit_logs, community_audit_logsId>;
  hasCommunity_audit_log!: Sequelize.HasManyHasAssociationMixin<community_audit_logs, community_audit_logsId>;
  hasCommunity_audit_logs!: Sequelize.HasManyHasAssociationsMixin<community_audit_logs, community_audit_logsId>;
  countCommunity_audit_logs!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany community_audit_logs via target_member_id
  target_member_community_audit_logs!: community_audit_logs[];
  getTarget_member_community_audit_logs!: Sequelize.HasManyGetAssociationsMixin<community_audit_logs>;
  setTarget_member_community_audit_logs!: Sequelize.HasManySetAssociationsMixin<community_audit_logs, community_audit_logsId>;
  addTarget_member_community_audit_log!: Sequelize.HasManyAddAssociationMixin<community_audit_logs, community_audit_logsId>;
  addTarget_member_community_audit_logs!: Sequelize.HasManyAddAssociationsMixin<community_audit_logs, community_audit_logsId>;
  createTarget_member_community_audit_log!: Sequelize.HasManyCreateAssociationMixin<community_audit_logs>;
  removeTarget_member_community_audit_log!: Sequelize.HasManyRemoveAssociationMixin<community_audit_logs, community_audit_logsId>;
  removeTarget_member_community_audit_logs!: Sequelize.HasManyRemoveAssociationsMixin<community_audit_logs, community_audit_logsId>;
  hasTarget_member_community_audit_log!: Sequelize.HasManyHasAssociationMixin<community_audit_logs, community_audit_logsId>;
  hasTarget_member_community_audit_logs!: Sequelize.HasManyHasAssociationsMixin<community_audit_logs, community_audit_logsId>;
  countTarget_member_community_audit_logs!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany community_members via member_id
  community_members!: community_members[];
  getCommunity_members!: Sequelize.HasManyGetAssociationsMixin<community_members>;
  setCommunity_members!: Sequelize.HasManySetAssociationsMixin<community_members, community_membersId>;
  addCommunity_member!: Sequelize.HasManyAddAssociationMixin<community_members, community_membersId>;
  addCommunity_members!: Sequelize.HasManyAddAssociationsMixin<community_members, community_membersId>;
  createCommunity_member!: Sequelize.HasManyCreateAssociationMixin<community_members>;
  removeCommunity_member!: Sequelize.HasManyRemoveAssociationMixin<community_members, community_membersId>;
  removeCommunity_members!: Sequelize.HasManyRemoveAssociationsMixin<community_members, community_membersId>;
  hasCommunity_member!: Sequelize.HasManyHasAssociationMixin<community_members, community_membersId>;
  hasCommunity_members!: Sequelize.HasManyHasAssociationsMixin<community_members, community_membersId>;
  countCommunity_members!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany community_topics via created_by
  community_topics!: community_topics[];
  getCommunity_topics!: Sequelize.HasManyGetAssociationsMixin<community_topics>;
  setCommunity_topics!: Sequelize.HasManySetAssociationsMixin<community_topics, community_topicsId>;
  addCommunity_topic!: Sequelize.HasManyAddAssociationMixin<community_topics, community_topicsId>;
  addCommunity_topics!: Sequelize.HasManyAddAssociationsMixin<community_topics, community_topicsId>;
  createCommunity_topic!: Sequelize.HasManyCreateAssociationMixin<community_topics>;
  removeCommunity_topic!: Sequelize.HasManyRemoveAssociationMixin<community_topics, community_topicsId>;
  removeCommunity_topics!: Sequelize.HasManyRemoveAssociationsMixin<community_topics, community_topicsId>;
  hasCommunity_topic!: Sequelize.HasManyHasAssociationMixin<community_topics, community_topicsId>;
  hasCommunity_topics!: Sequelize.HasManyHasAssociationsMixin<community_topics, community_topicsId>;
  countCommunity_topics!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany course_enrollments via member_id
  course_enrollments!: course_enrollments[];
  getCourse_enrollments!: Sequelize.HasManyGetAssociationsMixin<course_enrollments>;
  setCourse_enrollments!: Sequelize.HasManySetAssociationsMixin<course_enrollments, course_enrollmentsId>;
  addCourse_enrollment!: Sequelize.HasManyAddAssociationMixin<course_enrollments, course_enrollmentsId>;
  addCourse_enrollments!: Sequelize.HasManyAddAssociationsMixin<course_enrollments, course_enrollmentsId>;
  createCourse_enrollment!: Sequelize.HasManyCreateAssociationMixin<course_enrollments>;
  removeCourse_enrollment!: Sequelize.HasManyRemoveAssociationMixin<course_enrollments, course_enrollmentsId>;
  removeCourse_enrollments!: Sequelize.HasManyRemoveAssociationsMixin<course_enrollments, course_enrollmentsId>;
  hasCourse_enrollment!: Sequelize.HasManyHasAssociationMixin<course_enrollments, course_enrollmentsId>;
  hasCourse_enrollments!: Sequelize.HasManyHasAssociationsMixin<course_enrollments, course_enrollmentsId>;
  countCourse_enrollments!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany course_lesson_comments via member_id
  course_lesson_comments!: course_lesson_comments[];
  getCourse_lesson_comments!: Sequelize.HasManyGetAssociationsMixin<course_lesson_comments>;
  setCourse_lesson_comments!: Sequelize.HasManySetAssociationsMixin<course_lesson_comments, course_lesson_commentsId>;
  addCourse_lesson_comment!: Sequelize.HasManyAddAssociationMixin<course_lesson_comments, course_lesson_commentsId>;
  addCourse_lesson_comments!: Sequelize.HasManyAddAssociationsMixin<course_lesson_comments, course_lesson_commentsId>;
  createCourse_lesson_comment!: Sequelize.HasManyCreateAssociationMixin<course_lesson_comments>;
  removeCourse_lesson_comment!: Sequelize.HasManyRemoveAssociationMixin<course_lesson_comments, course_lesson_commentsId>;
  removeCourse_lesson_comments!: Sequelize.HasManyRemoveAssociationsMixin<course_lesson_comments, course_lesson_commentsId>;
  hasCourse_lesson_comment!: Sequelize.HasManyHasAssociationMixin<course_lesson_comments, course_lesson_commentsId>;
  hasCourse_lesson_comments!: Sequelize.HasManyHasAssociationsMixin<course_lesson_comments, course_lesson_commentsId>;
  countCourse_lesson_comments!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany course_lesson_completions via member_id
  course_lesson_completions!: course_lesson_completions[];
  getCourse_lesson_completions!: Sequelize.HasManyGetAssociationsMixin<course_lesson_completions>;
  setCourse_lesson_completions!: Sequelize.HasManySetAssociationsMixin<course_lesson_completions, course_lesson_completionsId>;
  addCourse_lesson_completion!: Sequelize.HasManyAddAssociationMixin<course_lesson_completions, course_lesson_completionsId>;
  addCourse_lesson_completions!: Sequelize.HasManyAddAssociationsMixin<course_lesson_completions, course_lesson_completionsId>;
  createCourse_lesson_completion!: Sequelize.HasManyCreateAssociationMixin<course_lesson_completions>;
  removeCourse_lesson_completion!: Sequelize.HasManyRemoveAssociationMixin<course_lesson_completions, course_lesson_completionsId>;
  removeCourse_lesson_completions!: Sequelize.HasManyRemoveAssociationsMixin<course_lesson_completions, course_lesson_completionsId>;
  hasCourse_lesson_completion!: Sequelize.HasManyHasAssociationMixin<course_lesson_completions, course_lesson_completionsId>;
  hasCourse_lesson_completions!: Sequelize.HasManyHasAssociationsMixin<course_lesson_completions, course_lesson_completionsId>;
  countCourse_lesson_completions!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany course_quiz_submissions via member_id
  course_quiz_submissions!: course_quiz_submissions[];
  getCourse_quiz_submissions!: Sequelize.HasManyGetAssociationsMixin<course_quiz_submissions>;
  setCourse_quiz_submissions!: Sequelize.HasManySetAssociationsMixin<course_quiz_submissions, course_quiz_submissionsId>;
  addCourse_quiz_submission!: Sequelize.HasManyAddAssociationMixin<course_quiz_submissions, course_quiz_submissionsId>;
  addCourse_quiz_submissions!: Sequelize.HasManyAddAssociationsMixin<course_quiz_submissions, course_quiz_submissionsId>;
  createCourse_quiz_submission!: Sequelize.HasManyCreateAssociationMixin<course_quiz_submissions>;
  removeCourse_quiz_submission!: Sequelize.HasManyRemoveAssociationMixin<course_quiz_submissions, course_quiz_submissionsId>;
  removeCourse_quiz_submissions!: Sequelize.HasManyRemoveAssociationsMixin<course_quiz_submissions, course_quiz_submissionsId>;
  hasCourse_quiz_submission!: Sequelize.HasManyHasAssociationMixin<course_quiz_submissions, course_quiz_submissionsId>;
  hasCourse_quiz_submissions!: Sequelize.HasManyHasAssociationsMixin<course_quiz_submissions, course_quiz_submissionsId>;
  countCourse_quiz_submissions!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany course_waitlist via member_id
  course_waitlists!: course_waitlist[];
  getCourse_waitlists!: Sequelize.HasManyGetAssociationsMixin<course_waitlist>;
  setCourse_waitlists!: Sequelize.HasManySetAssociationsMixin<course_waitlist, course_waitlistId>;
  addCourse_waitlist!: Sequelize.HasManyAddAssociationMixin<course_waitlist, course_waitlistId>;
  addCourse_waitlists!: Sequelize.HasManyAddAssociationsMixin<course_waitlist, course_waitlistId>;
  createCourse_waitlist!: Sequelize.HasManyCreateAssociationMixin<course_waitlist>;
  removeCourse_waitlist!: Sequelize.HasManyRemoveAssociationMixin<course_waitlist, course_waitlistId>;
  removeCourse_waitlists!: Sequelize.HasManyRemoveAssociationsMixin<course_waitlist, course_waitlistId>;
  hasCourse_waitlist!: Sequelize.HasManyHasAssociationMixin<course_waitlist, course_waitlistId>;
  hasCourse_waitlists!: Sequelize.HasManyHasAssociationsMixin<course_waitlist, course_waitlistId>;
  countCourse_waitlists!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany event_invitations via invited_by
  event_invitations!: event_invitations[];
  getEvent_invitations!: Sequelize.HasManyGetAssociationsMixin<event_invitations>;
  setEvent_invitations!: Sequelize.HasManySetAssociationsMixin<event_invitations, event_invitationsId>;
  addEvent_invitation!: Sequelize.HasManyAddAssociationMixin<event_invitations, event_invitationsId>;
  addEvent_invitations!: Sequelize.HasManyAddAssociationsMixin<event_invitations, event_invitationsId>;
  createEvent_invitation!: Sequelize.HasManyCreateAssociationMixin<event_invitations>;
  removeEvent_invitation!: Sequelize.HasManyRemoveAssociationMixin<event_invitations, event_invitationsId>;
  removeEvent_invitations!: Sequelize.HasManyRemoveAssociationsMixin<event_invitations, event_invitationsId>;
  hasEvent_invitation!: Sequelize.HasManyHasAssociationMixin<event_invitations, event_invitationsId>;
  hasEvent_invitations!: Sequelize.HasManyHasAssociationsMixin<event_invitations, event_invitationsId>;
  countEvent_invitations!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany event_invitations via invited_member_id
  invited_member_event_invitations!: event_invitations[];
  getInvited_member_event_invitations!: Sequelize.HasManyGetAssociationsMixin<event_invitations>;
  setInvited_member_event_invitations!: Sequelize.HasManySetAssociationsMixin<event_invitations, event_invitationsId>;
  addInvited_member_event_invitation!: Sequelize.HasManyAddAssociationMixin<event_invitations, event_invitationsId>;
  addInvited_member_event_invitations!: Sequelize.HasManyAddAssociationsMixin<event_invitations, event_invitationsId>;
  createInvited_member_event_invitation!: Sequelize.HasManyCreateAssociationMixin<event_invitations>;
  removeInvited_member_event_invitation!: Sequelize.HasManyRemoveAssociationMixin<event_invitations, event_invitationsId>;
  removeInvited_member_event_invitations!: Sequelize.HasManyRemoveAssociationsMixin<event_invitations, event_invitationsId>;
  hasInvited_member_event_invitation!: Sequelize.HasManyHasAssociationMixin<event_invitations, event_invitationsId>;
  hasInvited_member_event_invitations!: Sequelize.HasManyHasAssociationsMixin<event_invitations, event_invitationsId>;
  countInvited_member_event_invitations!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany event_registrations via member_id
  event_registrations!: event_registrations[];
  getEvent_registrations!: Sequelize.HasManyGetAssociationsMixin<event_registrations>;
  setEvent_registrations!: Sequelize.HasManySetAssociationsMixin<event_registrations, event_registrationsId>;
  addEvent_registration!: Sequelize.HasManyAddAssociationMixin<event_registrations, event_registrationsId>;
  addEvent_registrations!: Sequelize.HasManyAddAssociationsMixin<event_registrations, event_registrationsId>;
  createEvent_registration!: Sequelize.HasManyCreateAssociationMixin<event_registrations>;
  removeEvent_registration!: Sequelize.HasManyRemoveAssociationMixin<event_registrations, event_registrationsId>;
  removeEvent_registrations!: Sequelize.HasManyRemoveAssociationsMixin<event_registrations, event_registrationsId>;
  hasEvent_registration!: Sequelize.HasManyHasAssociationMixin<event_registrations, event_registrationsId>;
  hasEvent_registrations!: Sequelize.HasManyHasAssociationsMixin<event_registrations, event_registrationsId>;
  countEvent_registrations!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany image_post_likes via member_id
  image_post_likes!: image_post_likes[];
  getImage_post_likes!: Sequelize.HasManyGetAssociationsMixin<image_post_likes>;
  setImage_post_likes!: Sequelize.HasManySetAssociationsMixin<image_post_likes, image_post_likesId>;
  addImage_post_like!: Sequelize.HasManyAddAssociationMixin<image_post_likes, image_post_likesId>;
  addImage_post_likes!: Sequelize.HasManyAddAssociationsMixin<image_post_likes, image_post_likesId>;
  createImage_post_like!: Sequelize.HasManyCreateAssociationMixin<image_post_likes>;
  removeImage_post_like!: Sequelize.HasManyRemoveAssociationMixin<image_post_likes, image_post_likesId>;
  removeImage_post_likes!: Sequelize.HasManyRemoveAssociationsMixin<image_post_likes, image_post_likesId>;
  hasImage_post_like!: Sequelize.HasManyHasAssociationMixin<image_post_likes, image_post_likesId>;
  hasImage_post_likes!: Sequelize.HasManyHasAssociationsMixin<image_post_likes, image_post_likesId>;
  countImage_post_likes!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany notifications via member_id
  notifications!: notifications[];
  getNotifications!: Sequelize.HasManyGetAssociationsMixin<notifications>;
  setNotifications!: Sequelize.HasManySetAssociationsMixin<notifications, notificationsId>;
  addNotification!: Sequelize.HasManyAddAssociationMixin<notifications, notificationsId>;
  addNotifications!: Sequelize.HasManyAddAssociationsMixin<notifications, notificationsId>;
  createNotification!: Sequelize.HasManyCreateAssociationMixin<notifications>;
  removeNotification!: Sequelize.HasManyRemoveAssociationMixin<notifications, notificationsId>;
  removeNotifications!: Sequelize.HasManyRemoveAssociationsMixin<notifications, notificationsId>;
  hasNotification!: Sequelize.HasManyHasAssociationMixin<notifications, notificationsId>;
  hasNotifications!: Sequelize.HasManyHasAssociationsMixin<notifications, notificationsId>;
  countNotifications!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany pinned_conversations via member_id
  pinned_conversations!: pinned_conversations[];
  getPinned_conversations!: Sequelize.HasManyGetAssociationsMixin<pinned_conversations>;
  setPinned_conversations!: Sequelize.HasManySetAssociationsMixin<pinned_conversations, pinned_conversationsId>;
  addPinned_conversation!: Sequelize.HasManyAddAssociationMixin<pinned_conversations, pinned_conversationsId>;
  addPinned_conversations!: Sequelize.HasManyAddAssociationsMixin<pinned_conversations, pinned_conversationsId>;
  createPinned_conversation!: Sequelize.HasManyCreateAssociationMixin<pinned_conversations>;
  removePinned_conversation!: Sequelize.HasManyRemoveAssociationMixin<pinned_conversations, pinned_conversationsId>;
  removePinned_conversations!: Sequelize.HasManyRemoveAssociationsMixin<pinned_conversations, pinned_conversationsId>;
  hasPinned_conversation!: Sequelize.HasManyHasAssociationMixin<pinned_conversations, pinned_conversationsId>;
  hasPinned_conversations!: Sequelize.HasManyHasAssociationsMixin<pinned_conversations, pinned_conversationsId>;
  countPinned_conversations!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_chat via sender_id
  space_chats!: space_chat[];
  getSpace_chats!: Sequelize.HasManyGetAssociationsMixin<space_chat>;
  setSpace_chats!: Sequelize.HasManySetAssociationsMixin<space_chat, space_chatId>;
  addSpace_chat!: Sequelize.HasManyAddAssociationMixin<space_chat, space_chatId>;
  addSpace_chats!: Sequelize.HasManyAddAssociationsMixin<space_chat, space_chatId>;
  createSpace_chat!: Sequelize.HasManyCreateAssociationMixin<space_chat>;
  removeSpace_chat!: Sequelize.HasManyRemoveAssociationMixin<space_chat, space_chatId>;
  removeSpace_chats!: Sequelize.HasManyRemoveAssociationsMixin<space_chat, space_chatId>;
  hasSpace_chat!: Sequelize.HasManyHasAssociationMixin<space_chat, space_chatId>;
  hasSpace_chats!: Sequelize.HasManyHasAssociationsMixin<space_chat, space_chatId>;
  countSpace_chats!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_chat_bookmarks via member_id
  space_chat_bookmarks!: space_chat_bookmarks[];
  getSpace_chat_bookmarks!: Sequelize.HasManyGetAssociationsMixin<space_chat_bookmarks>;
  setSpace_chat_bookmarks!: Sequelize.HasManySetAssociationsMixin<space_chat_bookmarks, space_chat_bookmarksId>;
  addSpace_chat_bookmark!: Sequelize.HasManyAddAssociationMixin<space_chat_bookmarks, space_chat_bookmarksId>;
  addSpace_chat_bookmarks!: Sequelize.HasManyAddAssociationsMixin<space_chat_bookmarks, space_chat_bookmarksId>;
  createSpace_chat_bookmark!: Sequelize.HasManyCreateAssociationMixin<space_chat_bookmarks>;
  removeSpace_chat_bookmark!: Sequelize.HasManyRemoveAssociationMixin<space_chat_bookmarks, space_chat_bookmarksId>;
  removeSpace_chat_bookmarks!: Sequelize.HasManyRemoveAssociationsMixin<space_chat_bookmarks, space_chat_bookmarksId>;
  hasSpace_chat_bookmark!: Sequelize.HasManyHasAssociationMixin<space_chat_bookmarks, space_chat_bookmarksId>;
  hasSpace_chat_bookmarks!: Sequelize.HasManyHasAssociationsMixin<space_chat_bookmarks, space_chat_bookmarksId>;
  countSpace_chat_bookmarks!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_chat_mentions via mentioned_member_id
  space_chat_mentions!: space_chat_mentions[];
  getSpace_chat_mentions!: Sequelize.HasManyGetAssociationsMixin<space_chat_mentions>;
  setSpace_chat_mentions!: Sequelize.HasManySetAssociationsMixin<space_chat_mentions, space_chat_mentionsId>;
  addSpace_chat_mention!: Sequelize.HasManyAddAssociationMixin<space_chat_mentions, space_chat_mentionsId>;
  addSpace_chat_mentions!: Sequelize.HasManyAddAssociationsMixin<space_chat_mentions, space_chat_mentionsId>;
  createSpace_chat_mention!: Sequelize.HasManyCreateAssociationMixin<space_chat_mentions>;
  removeSpace_chat_mention!: Sequelize.HasManyRemoveAssociationMixin<space_chat_mentions, space_chat_mentionsId>;
  removeSpace_chat_mentions!: Sequelize.HasManyRemoveAssociationsMixin<space_chat_mentions, space_chat_mentionsId>;
  hasSpace_chat_mention!: Sequelize.HasManyHasAssociationMixin<space_chat_mentions, space_chat_mentionsId>;
  hasSpace_chat_mentions!: Sequelize.HasManyHasAssociationsMixin<space_chat_mentions, space_chat_mentionsId>;
  countSpace_chat_mentions!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_chat_reactions via member_id
  space_chat_reactions!: space_chat_reactions[];
  getSpace_chat_reactions!: Sequelize.HasManyGetAssociationsMixin<space_chat_reactions>;
  setSpace_chat_reactions!: Sequelize.HasManySetAssociationsMixin<space_chat_reactions, space_chat_reactionsId>;
  addSpace_chat_reaction!: Sequelize.HasManyAddAssociationMixin<space_chat_reactions, space_chat_reactionsId>;
  addSpace_chat_reactions!: Sequelize.HasManyAddAssociationsMixin<space_chat_reactions, space_chat_reactionsId>;
  createSpace_chat_reaction!: Sequelize.HasManyCreateAssociationMixin<space_chat_reactions>;
  removeSpace_chat_reaction!: Sequelize.HasManyRemoveAssociationMixin<space_chat_reactions, space_chat_reactionsId>;
  removeSpace_chat_reactions!: Sequelize.HasManyRemoveAssociationsMixin<space_chat_reactions, space_chat_reactionsId>;
  hasSpace_chat_reaction!: Sequelize.HasManyHasAssociationMixin<space_chat_reactions, space_chat_reactionsId>;
  hasSpace_chat_reactions!: Sequelize.HasManyHasAssociationsMixin<space_chat_reactions, space_chat_reactionsId>;
  countSpace_chat_reactions!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_events via host_id
  space_events!: space_events[];
  getSpace_events!: Sequelize.HasManyGetAssociationsMixin<space_events>;
  setSpace_events!: Sequelize.HasManySetAssociationsMixin<space_events, space_eventsId>;
  addSpace_event!: Sequelize.HasManyAddAssociationMixin<space_events, space_eventsId>;
  addSpace_events!: Sequelize.HasManyAddAssociationsMixin<space_events, space_eventsId>;
  createSpace_event!: Sequelize.HasManyCreateAssociationMixin<space_events>;
  removeSpace_event!: Sequelize.HasManyRemoveAssociationMixin<space_events, space_eventsId>;
  removeSpace_events!: Sequelize.HasManyRemoveAssociationsMixin<space_events, space_eventsId>;
  hasSpace_event!: Sequelize.HasManyHasAssociationMixin<space_events, space_eventsId>;
  hasSpace_events!: Sequelize.HasManyHasAssociationsMixin<space_events, space_eventsId>;
  countSpace_events!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_group_members via invited_by
  space_group_members!: space_group_members[];
  getSpace_group_members!: Sequelize.HasManyGetAssociationsMixin<space_group_members>;
  setSpace_group_members!: Sequelize.HasManySetAssociationsMixin<space_group_members, space_group_membersId>;
  addSpace_group_member!: Sequelize.HasManyAddAssociationMixin<space_group_members, space_group_membersId>;
  addSpace_group_members!: Sequelize.HasManyAddAssociationsMixin<space_group_members, space_group_membersId>;
  createSpace_group_member!: Sequelize.HasManyCreateAssociationMixin<space_group_members>;
  removeSpace_group_member!: Sequelize.HasManyRemoveAssociationMixin<space_group_members, space_group_membersId>;
  removeSpace_group_members!: Sequelize.HasManyRemoveAssociationsMixin<space_group_members, space_group_membersId>;
  hasSpace_group_member!: Sequelize.HasManyHasAssociationMixin<space_group_members, space_group_membersId>;
  hasSpace_group_members!: Sequelize.HasManyHasAssociationsMixin<space_group_members, space_group_membersId>;
  countSpace_group_members!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_group_members via member_id
  member_space_group_members!: space_group_members[];
  getMember_space_group_members!: Sequelize.HasManyGetAssociationsMixin<space_group_members>;
  setMember_space_group_members!: Sequelize.HasManySetAssociationsMixin<space_group_members, space_group_membersId>;
  addMember_space_group_member!: Sequelize.HasManyAddAssociationMixin<space_group_members, space_group_membersId>;
  addMember_space_group_members!: Sequelize.HasManyAddAssociationsMixin<space_group_members, space_group_membersId>;
  createMember_space_group_member!: Sequelize.HasManyCreateAssociationMixin<space_group_members>;
  removeMember_space_group_member!: Sequelize.HasManyRemoveAssociationMixin<space_group_members, space_group_membersId>;
  removeMember_space_group_members!: Sequelize.HasManyRemoveAssociationsMixin<space_group_members, space_group_membersId>;
  hasMember_space_group_member!: Sequelize.HasManyHasAssociationMixin<space_group_members, space_group_membersId>;
  hasMember_space_group_members!: Sequelize.HasManyHasAssociationsMixin<space_group_members, space_group_membersId>;
  countMember_space_group_members!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_image_bookmarks via member_id
  space_image_bookmarks!: space_image_bookmarks[];
  getSpace_image_bookmarks!: Sequelize.HasManyGetAssociationsMixin<space_image_bookmarks>;
  setSpace_image_bookmarks!: Sequelize.HasManySetAssociationsMixin<space_image_bookmarks, space_image_bookmarksId>;
  addSpace_image_bookmark!: Sequelize.HasManyAddAssociationMixin<space_image_bookmarks, space_image_bookmarksId>;
  addSpace_image_bookmarks!: Sequelize.HasManyAddAssociationsMixin<space_image_bookmarks, space_image_bookmarksId>;
  createSpace_image_bookmark!: Sequelize.HasManyCreateAssociationMixin<space_image_bookmarks>;
  removeSpace_image_bookmark!: Sequelize.HasManyRemoveAssociationMixin<space_image_bookmarks, space_image_bookmarksId>;
  removeSpace_image_bookmarks!: Sequelize.HasManyRemoveAssociationsMixin<space_image_bookmarks, space_image_bookmarksId>;
  hasSpace_image_bookmark!: Sequelize.HasManyHasAssociationMixin<space_image_bookmarks, space_image_bookmarksId>;
  hasSpace_image_bookmarks!: Sequelize.HasManyHasAssociationsMixin<space_image_bookmarks, space_image_bookmarksId>;
  countSpace_image_bookmarks!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_image_comment_likes via member_id
  space_image_comment_likes!: space_image_comment_likes[];
  getSpace_image_comment_likes!: Sequelize.HasManyGetAssociationsMixin<space_image_comment_likes>;
  setSpace_image_comment_likes!: Sequelize.HasManySetAssociationsMixin<space_image_comment_likes, space_image_comment_likesId>;
  addSpace_image_comment_like!: Sequelize.HasManyAddAssociationMixin<space_image_comment_likes, space_image_comment_likesId>;
  addSpace_image_comment_likes!: Sequelize.HasManyAddAssociationsMixin<space_image_comment_likes, space_image_comment_likesId>;
  createSpace_image_comment_like!: Sequelize.HasManyCreateAssociationMixin<space_image_comment_likes>;
  removeSpace_image_comment_like!: Sequelize.HasManyRemoveAssociationMixin<space_image_comment_likes, space_image_comment_likesId>;
  removeSpace_image_comment_likes!: Sequelize.HasManyRemoveAssociationsMixin<space_image_comment_likes, space_image_comment_likesId>;
  hasSpace_image_comment_like!: Sequelize.HasManyHasAssociationMixin<space_image_comment_likes, space_image_comment_likesId>;
  hasSpace_image_comment_likes!: Sequelize.HasManyHasAssociationsMixin<space_image_comment_likes, space_image_comment_likesId>;
  countSpace_image_comment_likes!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_image_comments via member_id
  space_image_comments!: space_image_comments[];
  getSpace_image_comments!: Sequelize.HasManyGetAssociationsMixin<space_image_comments>;
  setSpace_image_comments!: Sequelize.HasManySetAssociationsMixin<space_image_comments, space_image_commentsId>;
  addSpace_image_comment!: Sequelize.HasManyAddAssociationMixin<space_image_comments, space_image_commentsId>;
  addSpace_image_comments!: Sequelize.HasManyAddAssociationsMixin<space_image_comments, space_image_commentsId>;
  createSpace_image_comment!: Sequelize.HasManyCreateAssociationMixin<space_image_comments>;
  removeSpace_image_comment!: Sequelize.HasManyRemoveAssociationMixin<space_image_comments, space_image_commentsId>;
  removeSpace_image_comments!: Sequelize.HasManyRemoveAssociationsMixin<space_image_comments, space_image_commentsId>;
  hasSpace_image_comment!: Sequelize.HasManyHasAssociationMixin<space_image_comments, space_image_commentsId>;
  hasSpace_image_comments!: Sequelize.HasManyHasAssociationsMixin<space_image_comments, space_image_commentsId>;
  countSpace_image_comments!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_image_followers via member_id
  space_image_followers!: space_image_followers[];
  getSpace_image_followers!: Sequelize.HasManyGetAssociationsMixin<space_image_followers>;
  setSpace_image_followers!: Sequelize.HasManySetAssociationsMixin<space_image_followers, space_image_followersId>;
  addSpace_image_follower!: Sequelize.HasManyAddAssociationMixin<space_image_followers, space_image_followersId>;
  addSpace_image_followers!: Sequelize.HasManyAddAssociationsMixin<space_image_followers, space_image_followersId>;
  createSpace_image_follower!: Sequelize.HasManyCreateAssociationMixin<space_image_followers>;
  removeSpace_image_follower!: Sequelize.HasManyRemoveAssociationMixin<space_image_followers, space_image_followersId>;
  removeSpace_image_followers!: Sequelize.HasManyRemoveAssociationsMixin<space_image_followers, space_image_followersId>;
  hasSpace_image_follower!: Sequelize.HasManyHasAssociationMixin<space_image_followers, space_image_followersId>;
  hasSpace_image_followers!: Sequelize.HasManyHasAssociationsMixin<space_image_followers, space_image_followersId>;
  countSpace_image_followers!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_images via member_id
  space_images!: space_images[];
  getSpace_images!: Sequelize.HasManyGetAssociationsMixin<space_images>;
  setSpace_images!: Sequelize.HasManySetAssociationsMixin<space_images, space_imagesId>;
  addSpace_image!: Sequelize.HasManyAddAssociationMixin<space_images, space_imagesId>;
  addSpace_images!: Sequelize.HasManyAddAssociationsMixin<space_images, space_imagesId>;
  createSpace_image!: Sequelize.HasManyCreateAssociationMixin<space_images>;
  removeSpace_image!: Sequelize.HasManyRemoveAssociationMixin<space_images, space_imagesId>;
  removeSpace_images!: Sequelize.HasManyRemoveAssociationsMixin<space_images, space_imagesId>;
  hasSpace_image!: Sequelize.HasManyHasAssociationMixin<space_images, space_imagesId>;
  hasSpace_images!: Sequelize.HasManyHasAssociationsMixin<space_images, space_imagesId>;
  countSpace_images!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_members via approved_by
  space_members!: space_members[];
  getSpace_members!: Sequelize.HasManyGetAssociationsMixin<space_members>;
  setSpace_members!: Sequelize.HasManySetAssociationsMixin<space_members, space_membersId>;
  addSpace_member!: Sequelize.HasManyAddAssociationMixin<space_members, space_membersId>;
  addSpace_members!: Sequelize.HasManyAddAssociationsMixin<space_members, space_membersId>;
  createSpace_member!: Sequelize.HasManyCreateAssociationMixin<space_members>;
  removeSpace_member!: Sequelize.HasManyRemoveAssociationMixin<space_members, space_membersId>;
  removeSpace_members!: Sequelize.HasManyRemoveAssociationsMixin<space_members, space_membersId>;
  hasSpace_member!: Sequelize.HasManyHasAssociationMixin<space_members, space_membersId>;
  hasSpace_members!: Sequelize.HasManyHasAssociationsMixin<space_members, space_membersId>;
  countSpace_members!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_members via invited_by
  invited_by_space_members!: space_members[];
  getInvited_by_space_members!: Sequelize.HasManyGetAssociationsMixin<space_members>;
  setInvited_by_space_members!: Sequelize.HasManySetAssociationsMixin<space_members, space_membersId>;
  addInvited_by_space_member!: Sequelize.HasManyAddAssociationMixin<space_members, space_membersId>;
  addInvited_by_space_members!: Sequelize.HasManyAddAssociationsMixin<space_members, space_membersId>;
  createInvited_by_space_member!: Sequelize.HasManyCreateAssociationMixin<space_members>;
  removeInvited_by_space_member!: Sequelize.HasManyRemoveAssociationMixin<space_members, space_membersId>;
  removeInvited_by_space_members!: Sequelize.HasManyRemoveAssociationsMixin<space_members, space_membersId>;
  hasInvited_by_space_member!: Sequelize.HasManyHasAssociationMixin<space_members, space_membersId>;
  hasInvited_by_space_members!: Sequelize.HasManyHasAssociationsMixin<space_members, space_membersId>;
  countInvited_by_space_members!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_members via member_id
  member_space_members!: space_members[];
  getMember_space_members!: Sequelize.HasManyGetAssociationsMixin<space_members>;
  setMember_space_members!: Sequelize.HasManySetAssociationsMixin<space_members, space_membersId>;
  addMember_space_member!: Sequelize.HasManyAddAssociationMixin<space_members, space_membersId>;
  addMember_space_members!: Sequelize.HasManyAddAssociationsMixin<space_members, space_membersId>;
  createMember_space_member!: Sequelize.HasManyCreateAssociationMixin<space_members>;
  removeMember_space_member!: Sequelize.HasManyRemoveAssociationMixin<space_members, space_membersId>;
  removeMember_space_members!: Sequelize.HasManyRemoveAssociationsMixin<space_members, space_membersId>;
  hasMember_space_member!: Sequelize.HasManyHasAssociationMixin<space_members, space_membersId>;
  hasMember_space_members!: Sequelize.HasManyHasAssociationsMixin<space_members, space_membersId>;
  countMember_space_members!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_post_bookmarks via member_id
  space_post_bookmarks!: space_post_bookmarks[];
  getSpace_post_bookmarks!: Sequelize.HasManyGetAssociationsMixin<space_post_bookmarks>;
  setSpace_post_bookmarks!: Sequelize.HasManySetAssociationsMixin<space_post_bookmarks, space_post_bookmarksId>;
  addSpace_post_bookmark!: Sequelize.HasManyAddAssociationMixin<space_post_bookmarks, space_post_bookmarksId>;
  addSpace_post_bookmarks!: Sequelize.HasManyAddAssociationsMixin<space_post_bookmarks, space_post_bookmarksId>;
  createSpace_post_bookmark!: Sequelize.HasManyCreateAssociationMixin<space_post_bookmarks>;
  removeSpace_post_bookmark!: Sequelize.HasManyRemoveAssociationMixin<space_post_bookmarks, space_post_bookmarksId>;
  removeSpace_post_bookmarks!: Sequelize.HasManyRemoveAssociationsMixin<space_post_bookmarks, space_post_bookmarksId>;
  hasSpace_post_bookmark!: Sequelize.HasManyHasAssociationMixin<space_post_bookmarks, space_post_bookmarksId>;
  hasSpace_post_bookmarks!: Sequelize.HasManyHasAssociationsMixin<space_post_bookmarks, space_post_bookmarksId>;
  countSpace_post_bookmarks!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_post_comment_likes via member_id
  space_post_comment_likes!: space_post_comment_likes[];
  getSpace_post_comment_likes!: Sequelize.HasManyGetAssociationsMixin<space_post_comment_likes>;
  setSpace_post_comment_likes!: Sequelize.HasManySetAssociationsMixin<space_post_comment_likes, space_post_comment_likesId>;
  addSpace_post_comment_like!: Sequelize.HasManyAddAssociationMixin<space_post_comment_likes, space_post_comment_likesId>;
  addSpace_post_comment_likes!: Sequelize.HasManyAddAssociationsMixin<space_post_comment_likes, space_post_comment_likesId>;
  createSpace_post_comment_like!: Sequelize.HasManyCreateAssociationMixin<space_post_comment_likes>;
  removeSpace_post_comment_like!: Sequelize.HasManyRemoveAssociationMixin<space_post_comment_likes, space_post_comment_likesId>;
  removeSpace_post_comment_likes!: Sequelize.HasManyRemoveAssociationsMixin<space_post_comment_likes, space_post_comment_likesId>;
  hasSpace_post_comment_like!: Sequelize.HasManyHasAssociationMixin<space_post_comment_likes, space_post_comment_likesId>;
  hasSpace_post_comment_likes!: Sequelize.HasManyHasAssociationsMixin<space_post_comment_likes, space_post_comment_likesId>;
  countSpace_post_comment_likes!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_post_comments via member_id
  space_post_comments!: space_post_comments[];
  getSpace_post_comments!: Sequelize.HasManyGetAssociationsMixin<space_post_comments>;
  setSpace_post_comments!: Sequelize.HasManySetAssociationsMixin<space_post_comments, space_post_commentsId>;
  addSpace_post_comment!: Sequelize.HasManyAddAssociationMixin<space_post_comments, space_post_commentsId>;
  addSpace_post_comments!: Sequelize.HasManyAddAssociationsMixin<space_post_comments, space_post_commentsId>;
  createSpace_post_comment!: Sequelize.HasManyCreateAssociationMixin<space_post_comments>;
  removeSpace_post_comment!: Sequelize.HasManyRemoveAssociationMixin<space_post_comments, space_post_commentsId>;
  removeSpace_post_comments!: Sequelize.HasManyRemoveAssociationsMixin<space_post_comments, space_post_commentsId>;
  hasSpace_post_comment!: Sequelize.HasManyHasAssociationMixin<space_post_comments, space_post_commentsId>;
  hasSpace_post_comments!: Sequelize.HasManyHasAssociationsMixin<space_post_comments, space_post_commentsId>;
  countSpace_post_comments!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_post_comments via reply_to_member_id
  reply_to_member_space_post_comments!: space_post_comments[];
  getReply_to_member_space_post_comments!: Sequelize.HasManyGetAssociationsMixin<space_post_comments>;
  setReply_to_member_space_post_comments!: Sequelize.HasManySetAssociationsMixin<space_post_comments, space_post_commentsId>;
  addReply_to_member_space_post_comment!: Sequelize.HasManyAddAssociationMixin<space_post_comments, space_post_commentsId>;
  addReply_to_member_space_post_comments!: Sequelize.HasManyAddAssociationsMixin<space_post_comments, space_post_commentsId>;
  createReply_to_member_space_post_comment!: Sequelize.HasManyCreateAssociationMixin<space_post_comments>;
  removeReply_to_member_space_post_comment!: Sequelize.HasManyRemoveAssociationMixin<space_post_comments, space_post_commentsId>;
  removeReply_to_member_space_post_comments!: Sequelize.HasManyRemoveAssociationsMixin<space_post_comments, space_post_commentsId>;
  hasReply_to_member_space_post_comment!: Sequelize.HasManyHasAssociationMixin<space_post_comments, space_post_commentsId>;
  hasReply_to_member_space_post_comments!: Sequelize.HasManyHasAssociationsMixin<space_post_comments, space_post_commentsId>;
  countReply_to_member_space_post_comments!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_post_followers via member_id
  space_post_followers!: space_post_followers[];
  getSpace_post_followers!: Sequelize.HasManyGetAssociationsMixin<space_post_followers>;
  setSpace_post_followers!: Sequelize.HasManySetAssociationsMixin<space_post_followers, space_post_followersId>;
  addSpace_post_follower!: Sequelize.HasManyAddAssociationMixin<space_post_followers, space_post_followersId>;
  addSpace_post_followers!: Sequelize.HasManyAddAssociationsMixin<space_post_followers, space_post_followersId>;
  createSpace_post_follower!: Sequelize.HasManyCreateAssociationMixin<space_post_followers>;
  removeSpace_post_follower!: Sequelize.HasManyRemoveAssociationMixin<space_post_followers, space_post_followersId>;
  removeSpace_post_followers!: Sequelize.HasManyRemoveAssociationsMixin<space_post_followers, space_post_followersId>;
  hasSpace_post_follower!: Sequelize.HasManyHasAssociationMixin<space_post_followers, space_post_followersId>;
  hasSpace_post_followers!: Sequelize.HasManyHasAssociationsMixin<space_post_followers, space_post_followersId>;
  countSpace_post_followers!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_post_likes via member_id
  space_post_likes!: space_post_likes[];
  getSpace_post_likes!: Sequelize.HasManyGetAssociationsMixin<space_post_likes>;
  setSpace_post_likes!: Sequelize.HasManySetAssociationsMixin<space_post_likes, space_post_likesId>;
  addSpace_post_like!: Sequelize.HasManyAddAssociationMixin<space_post_likes, space_post_likesId>;
  addSpace_post_likes!: Sequelize.HasManyAddAssociationsMixin<space_post_likes, space_post_likesId>;
  createSpace_post_like!: Sequelize.HasManyCreateAssociationMixin<space_post_likes>;
  removeSpace_post_like!: Sequelize.HasManyRemoveAssociationMixin<space_post_likes, space_post_likesId>;
  removeSpace_post_likes!: Sequelize.HasManyRemoveAssociationsMixin<space_post_likes, space_post_likesId>;
  hasSpace_post_like!: Sequelize.HasManyHasAssociationMixin<space_post_likes, space_post_likesId>;
  hasSpace_post_likes!: Sequelize.HasManyHasAssociationsMixin<space_post_likes, space_post_likesId>;
  countSpace_post_likes!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany space_posts via member_id
  space_posts!: space_posts[];
  getSpace_posts!: Sequelize.HasManyGetAssociationsMixin<space_posts>;
  setSpace_posts!: Sequelize.HasManySetAssociationsMixin<space_posts, space_postsId>;
  addSpace_post!: Sequelize.HasManyAddAssociationMixin<space_posts, space_postsId>;
  addSpace_posts!: Sequelize.HasManyAddAssociationsMixin<space_posts, space_postsId>;
  createSpace_post!: Sequelize.HasManyCreateAssociationMixin<space_posts>;
  removeSpace_post!: Sequelize.HasManyRemoveAssociationMixin<space_posts, space_postsId>;
  removeSpace_posts!: Sequelize.HasManyRemoveAssociationsMixin<space_posts, space_postsId>;
  hasSpace_post!: Sequelize.HasManyHasAssociationMixin<space_posts, space_postsId>;
  hasSpace_posts!: Sequelize.HasManyHasAssociationsMixin<space_posts, space_postsId>;
  countSpace_posts!: Sequelize.HasManyCountAssociationsMixin;
  // members hasMany spaces via created_by
  spaces!: spaces[];
  getSpaces!: Sequelize.HasManyGetAssociationsMixin<spaces>;
  setSpaces!: Sequelize.HasManySetAssociationsMixin<spaces, spacesId>;
  addSpace!: Sequelize.HasManyAddAssociationMixin<spaces, spacesId>;
  addSpaces!: Sequelize.HasManyAddAssociationsMixin<spaces, spacesId>;
  createSpace!: Sequelize.HasManyCreateAssociationMixin<spaces>;
  removeSpace!: Sequelize.HasManyRemoveAssociationMixin<spaces, spacesId>;
  removeSpaces!: Sequelize.HasManyRemoveAssociationsMixin<spaces, spacesId>;
  hasSpace!: Sequelize.HasManyHasAssociationMixin<spaces, spacesId>;
  hasSpaces!: Sequelize.HasManyHasAssociationsMixin<spaces, spacesId>;
  countSpaces!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof members {
    return members.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "members_email_key"
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mobile_number: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "unique_mobile_per_country"
    },
    country_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: "unique_mobile_per_country"
    },
    profile_image_url: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "no-profile.png"
    },
    gender: {
      type: DataTypes.ENUM("male","female","other","prefer_not_to_say"),
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pincode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    is_online: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    last_seen: {
      type: DataTypes.DATE,
      allowNull: true
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'members',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "members_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "members_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "unique_mobile_per_country",
        unique: true,
        fields: [
          { name: "country_code" },
          { name: "mobile_number" },
        ]
      },
    ]
  });
  }
}
