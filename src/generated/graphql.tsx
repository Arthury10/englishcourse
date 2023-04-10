export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AuthInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AuthType = {
  __typename?: 'AuthType';
  token: Scalars['String'];
  user: User;
};

export type Classroom = {
  __typename?: 'Classroom';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  invite: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CreateClassroomInput = {
  invite?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  port?: InputMaybe<Scalars['Float']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createClassroom: Classroom;
  createUserByAdmin: User;
  deleteAllClassrooms: Scalars['Boolean'];
  getAllClassrooms: Array<Classroom>;
  login: AuthType;
  updateUserByAdmin: User;
};


export type MutationCreateClassroomArgs = {
  data?: InputMaybe<CreateClassroomInput>;
};


export type MutationCreateUserByAdminArgs = {
  data?: InputMaybe<CreateUserByAdminInput>;
};


export type MutationLoginArgs = {
  data: AuthInput;
};


export type MutationUpdateUserByAdminArgs = {
  data?: InputMaybe<UpdateUserByAdminInput>;
};

export type Query = {
  __typename?: 'Query';
  getClassroomByPk: Classroom;
  getUserByPk: User;
  isTokenValid: TokenValidType;
  me: User;
};


export type QueryGetClassroomByPkArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryGetUserByPkArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryIsTokenValidArgs = {
  token: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  UserAdded: User;
};


export type SubscriptionUserAddedArgs = {
  filter?: InputMaybe<Scalars['String']>;
};

export type TokenValidType = {
  __typename?: 'TokenValidType';
  valid: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  resetPasswordToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type UserDto = {
  email?: InputMaybe<Scalars['String']>;
  lastLogin?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  resetPasswordToken?: InputMaybe<Scalars['String']>;
};

export type CreateUserByAdminInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UpdateUserByAdminInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};
