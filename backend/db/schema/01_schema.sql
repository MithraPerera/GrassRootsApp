DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS communities CASCADE;
DROP TABLE IF EXISTS CommunityMembers CASCADE;
DROP TABLE IF EXISTS Events CASCADE;
DROP TABLE IF EXISTS Petitions CASCADE;
DROP TABLE IF EXISTS Resources CASCADE;
DROP TABLE IF EXISTS Surveys CASCADE;
DROP TABLE IF EXISTS SurveyQuestions CASCADE;
DROP TABLE IF EXISTS SurveyResponses CASCADE;
DROP TABLE IF EXISTS Skills CASCADE;
DROP TABLE IF EXISTS UserSkills CASCADE;
DROP TABLE IF EXISTS Discussions CASCADE;
DROP TABLE IF EXISTS DiscussionPosts CASCADE;
DROP TABLE IF EXISTS Volunteers CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS comments CASCADE;


-- Create the Users table
CREATE TABLE Users (
  UserID serial PRIMARY KEY,
  SubID varchar,
  Username varchar,
  Email varchar,
  Password varchar,
  UserType varchar
);

-- Create the Communities table
CREATE TABLE Communities (
  CommunityID SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  location VARCHAR(255) NOT NULL,
  cause INT NOT NULL,
  creation_date DATE,
  picture_url VARCHAR(255) NOT NULL
);
-- Create the CommunityMembers table
CREATE TABLE CommunityMembers (
  MembershipID serial PRIMARY KEY,
  UserID int REFERENCES Users(UserID),
  CommunityID int REFERENCES Communities(CommunityID),
  JoinDate date,
  Role varchar
);

CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY NOT NULL,
  user_id VARCHAR NOT NULL,
  CommunityID INT REFERENCES Communities(CommunityID) ON DELETE CASCADE NOT NULL,
  title VARCHAR NOT NULL,
  context TEXT,
  timestamp TIMESTAMP
);

CREATE TABLE comments (
  comment_id serial PRIMARY KEY NOT NULL,
  post_id int REFERENCES posts(post_id),
  user_id int REFERENCES users(userID),
  comment TEXT,
  timestamp time
);

-- Create the Events table
CREATE TABLE Events (
  EventID serial PRIMARY KEY,
  CommunityID int REFERENCES Communities(CommunityID),
  Title varchar,
  Details text,
  Date Date,
  Location varchar
);

-- Create the Petitions table
CREATE TABLE Petitions (
  PetitionID serial PRIMARY KEY,
  UserID int REFERENCES Users(UserID),
  CommunityID int REFERENCES Communities(CommunityID),
  Title varchar,
  Description text,
  SignatureCount int,
  Deadline date
);

-- Create the Resources table
CREATE TABLE Resources (
  ResourceID serial PRIMARY KEY,
  UserID int REFERENCES Users(UserID),
  Name varchar,
  Category varchar,
  Description text,
  Location varchar,
  ContactInformation varchar
);

-- Create the Surveys table
CREATE TABLE Surveys (
  SurveyID serial PRIMARY KEY,
  UserID int REFERENCES Users(UserID),
  CommunityID int REFERENCES Communities(CommunityID),
  Title varchar,
  Description text,
  Timestamp timestamp
);

-- Create the SurveyQuestions table
CREATE TABLE SurveyQuestions (
  QuestionID serial PRIMARY KEY,
  SurveyID int REFERENCES Surveys(SurveyID),
  Question text
);

-- Create the SurveyResponses table
CREATE TABLE SurveyResponses (
  ResponseID serial PRIMARY KEY,
  UserID int REFERENCES Users(UserID),
  QuestionID int REFERENCES SurveyQuestions(QuestionID),
  Response text,
  Timestamp timestamp
);

-- Create the Skills table
CREATE TABLE Skills (
  SkillID serial PRIMARY KEY,
  Name varchar,
  Description text
);

-- Create the UserSkills table
CREATE TABLE UserSkills (
  UserSkillID serial PRIMARY KEY,
  UserID int REFERENCES Users(UserID),
  SkillID int REFERENCES Skills(SkillID),
  ExperienceLevel varchar
);


-- Create the Discussions table
CREATE TABLE Discussions (
  DiscussionID serial PRIMARY KEY,
  CommunityID int REFERENCES Communities(CommunityID),
  Title varchar,
  Description text,
  Category varchar,
  Timestamp timestamp
);

-- Create the DiscussionPosts table
CREATE TABLE DiscussionPosts (
  PostID serial PRIMARY KEY,
  DiscussionID int REFERENCES Discussions(DiscussionID),
  UserID int REFERENCES Users(UserID),
  Content text,
  Timestamp timestamp
);


