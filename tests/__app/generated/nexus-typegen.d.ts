/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BoolFilter: { // input type
    equals?: boolean | null; // Boolean
    not?: NexusGenInputs['NestedBoolFilter'] | null; // NestedBoolFilter
  }
  BubbleCreateNestedOneWithoutMembersInput: { // input type
    connect?: NexusGenInputs['BubbleWhereUniqueInput'] | null; // BubbleWhereUniqueInput
    connectOrCreate?: NexusGenInputs['BubbleCreateOrConnectWithoutMembersInput'] | null; // BubbleCreateOrConnectWithoutMembersInput
    create?: NexusGenInputs['BubbleCreateWithoutMembersInput'] | null; // BubbleCreateWithoutMembersInput
  }
  BubbleCreateOrConnectWithoutMembersInput: { // input type
    create: NexusGenInputs['BubbleCreateWithoutMembersInput']; // BubbleCreateWithoutMembersInput!
    where: NexusGenInputs['BubbleWhereUniqueInput']; // BubbleWhereUniqueInput!
  }
  BubbleCreateWithoutMembersInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    id?: string | null; // String
    private: boolean; // Boolean!
  }
  BubbleMembersOrderByInput: { // input type
    firstName?: NexusGenEnums['SortOrder'] | null; // SortOrder
    locationId?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  BubbleMembersWhereInput: { // input type
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    location?: NexusGenInputs['LocationWhereInput'] | null; // LocationWhereInput
  }
  BubbleWhereInput: { // input type
    AND?: NexusGenInputs['BubbleWhereInput'][] | null; // [BubbleWhereInput!]
    NOT?: NexusGenInputs['BubbleWhereInput'][] | null; // [BubbleWhereInput!]
    OR?: NexusGenInputs['BubbleWhereInput'][] | null; // [BubbleWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    members?: NexusGenInputs['UserListRelationFilter'] | null; // UserListRelationFilter
    private?: NexusGenInputs['BoolFilter'] | null; // BoolFilter
  }
  BubbleWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  DateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  EnumPostStatusFieldUpdateOperationsInput: { // input type
    set?: NexusGenEnums['PostStatus'] | null; // PostStatus
  }
  EnumPostStatusFilter: { // input type
    equals?: NexusGenEnums['PostStatus'] | null; // PostStatus
    in?: NexusGenEnums['PostStatus'][] | null; // [PostStatus!]
    not?: NexusGenInputs['NestedEnumPostStatusFilter'] | null; // NestedEnumPostStatusFilter
    notIn?: NexusGenEnums['PostStatus'][] | null; // [PostStatus!]
  }
  FloatFieldUpdateOperationsInput: { // input type
    decrement?: number | null; // Float
    divide?: number | null; // Float
    increment?: number | null; // Float
    multiply?: number | null; // Float
    set?: number | null; // Float
  }
  FloatFilter: { // input type
    equals?: number | null; // Float
    gt?: number | null; // Float
    gte?: number | null; // Float
    in?: number[] | null; // [Float!]
    lt?: number | null; // Float
    lte?: number | null; // Float
    not?: NexusGenInputs['NestedFloatFilter'] | null; // NestedFloatFilter
    notIn?: number[] | null; // [Float!]
  }
  IntFieldUpdateOperationsInput: { // input type
    decrement?: number | null; // Int
    divide?: number | null; // Int
    increment?: number | null; // Int
    multiply?: number | null; // Int
    set?: number | null; // Int
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  LocationCreateNestedOneWithoutUserInput: { // input type
    connect?: NexusGenInputs['LocationWhereUniqueInput'] | null; // LocationWhereUniqueInput
    connectOrCreate?: NexusGenInputs['LocationCreateOrConnectWithoutUserInput'] | null; // LocationCreateOrConnectWithoutUserInput
    create?: NexusGenInputs['LocationCreateWithoutUserInput'] | null; // LocationCreateWithoutUserInput
  }
  LocationCreateOrConnectWithoutUserInput: { // input type
    create: NexusGenInputs['LocationCreateWithoutUserInput']; // LocationCreateWithoutUserInput!
    where: NexusGenInputs['LocationWhereUniqueInput']; // LocationWhereUniqueInput!
  }
  LocationCreateWithoutUserInput: { // input type
    city: string; // String!
    country: string; // String!
  }
  LocationWhereInput: { // input type
    AND?: NexusGenInputs['LocationWhereInput'][] | null; // [LocationWhereInput!]
    NOT?: NexusGenInputs['LocationWhereInput'][] | null; // [LocationWhereInput!]
    OR?: NexusGenInputs['LocationWhereInput'][] | null; // [LocationWhereInput!]
    User?: NexusGenInputs['UserListRelationFilter'] | null; // UserListRelationFilter
    city?: NexusGenInputs['StringFilter'] | null; // StringFilter
    country?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
  }
  LocationWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  NestedBoolFilter: { // input type
    equals?: boolean | null; // Boolean
    not?: NexusGenInputs['NestedBoolFilter'] | null; // NestedBoolFilter
  }
  NestedDateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedEnumPostStatusFilter: { // input type
    equals?: NexusGenEnums['PostStatus'] | null; // PostStatus
    in?: NexusGenEnums['PostStatus'][] | null; // [PostStatus!]
    not?: NexusGenInputs['NestedEnumPostStatusFilter'] | null; // NestedEnumPostStatusFilter
    notIn?: NexusGenEnums['PostStatus'][] | null; // [PostStatus!]
  }
  NestedFloatFilter: { // input type
    equals?: number | null; // Float
    gt?: number | null; // Float
    gte?: number | null; // Float
    in?: number[] | null; // [Float!]
    lt?: number | null; // Float
    lte?: number | null; // Float
    not?: NexusGenInputs['NestedFloatFilter'] | null; // NestedFloatFilter
    notIn?: number[] | null; // [Float!]
  }
  NestedIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  NestedStringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  PostCreateInput: { // input type
    authors?: NexusGenInputs['UserCreateNestedManyWithoutPostsInput'] | null; // UserCreateNestedManyWithoutPostsInput
    likes: number; // Int!
    rating: number; // Float!
    status: NexusGenEnums['PostStatus']; // PostStatus!
  }
  PostListRelationFilter: { // input type
    every?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    none?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    some?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
  }
  PostOrderByWithRelationInput: { // input type
    authors?: NexusGenInputs['UserOrderByRelationAggregateInput'] | null; // UserOrderByRelationAggregateInput
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    likes?: NexusGenEnums['SortOrder'] | null; // SortOrder
    rating?: NexusGenEnums['SortOrder'] | null; // SortOrder
    status?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  PostUpdateManyMutationInput: { // input type
    likes?: NexusGenInputs['IntFieldUpdateOperationsInput'] | null; // IntFieldUpdateOperationsInput
    rating?: NexusGenInputs['FloatFieldUpdateOperationsInput'] | null; // FloatFieldUpdateOperationsInput
    status?: NexusGenInputs['EnumPostStatusFieldUpdateOperationsInput'] | null; // EnumPostStatusFieldUpdateOperationsInput
  }
  PostWhereInput: { // input type
    AND?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    NOT?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    OR?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    authors?: NexusGenInputs['UserListRelationFilter'] | null; // UserListRelationFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    likes?: NexusGenInputs['IntFilter'] | null; // IntFilter
    rating?: NexusGenInputs['FloatFilter'] | null; // FloatFilter
    status?: NexusGenInputs['EnumPostStatusFilter'] | null; // EnumPostStatusFilter
  }
  PostWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    mode?: NexusGenEnums['QueryMode'] | null; // QueryMode
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  StringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    mode?: NexusGenEnums['QueryMode'] | null; // QueryMode
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  UserCreateNestedManyWithoutPostsInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'][] | null; // [UserWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['UserCreateOrConnectWithoutPostsInput'][] | null; // [UserCreateOrConnectWithoutPostsInput!]
    create?: NexusGenInputs['UserCreateWithoutPostsInput'][] | null; // [UserCreateWithoutPostsInput!]
  }
  UserCreateOrConnectWithoutPostsInput: { // input type
    create: NexusGenInputs['UserCreateWithoutPostsInput']; // UserCreateWithoutPostsInput!
    where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
  }
  UserCreateWithoutPostsInput: { // input type
    Bubble?: NexusGenInputs['BubbleCreateNestedOneWithoutMembersInput'] | null; // BubbleCreateNestedOneWithoutMembersInput
    firstName: string; // String!
    id?: string | null; // String
    lastName: string; // String!
    location: NexusGenInputs['LocationCreateNestedOneWithoutUserInput']; // LocationCreateNestedOneWithoutUserInput!
  }
  UserListRelationFilter: { // input type
    every?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    none?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    some?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  UserOrderByRelationAggregateInput: { // input type
    _count?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    Bubble?: NexusGenInputs['BubbleWhereInput'] | null; // BubbleWhereInput
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    bubbleId?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    firstName?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    lastName?: NexusGenInputs['StringFilter'] | null; // StringFilter
    location?: NexusGenInputs['LocationWhereInput'] | null; // LocationWhereInput
    locationId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    posts?: NexusGenInputs['PostListRelationFilter'] | null; // PostListRelationFilter
  }
  UserWhereUniqueInput: { // input type
    id?: string | null; // String
  }
}

export interface NexusGenEnums {
  PostStatus: "DRAFT" | "PUBLISHED"
  QueryMode: "default" | "insensitive"
  SortOrder: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  AffectedRowsOutput: { // root type
    count: number; // Int!
  }
  Bubble: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
  }
  Location: { // root type
    city: string; // String!
    country: string; // String!
    id: number; // Int!
  }
  Mutation: {};
  Post: { // root type
    id: number; // Int!
    status: NexusGenEnums['PostStatus']; // PostStatus!
  }
  Query: {};
  User: { // root type
    firstName: string; // String!
    id: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  AffectedRowsOutput: { // field return type
    count: number; // Int!
  }
  Bubble: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
    members: NexusGenRootTypes['User'][]; // [User!]!
  }
  Location: { // field return type
    city: string; // String!
    country: string; // String!
    id: number; // Int!
  }
  Mutation: { // field return type
    createOnePost: NexusGenRootTypes['Post']; // Post!
    updateManyPost: NexusGenRootTypes['AffectedRowsOutput']; // AffectedRowsOutput!
  }
  Post: { // field return type
    authors: NexusGenRootTypes['User'][]; // [User!]!
    id: number; // Int!
    status: NexusGenEnums['PostStatus']; // PostStatus!
  }
  Query: { // field return type
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  User: { // field return type
    firstName: string; // String!
    id: string; // String!
    location: NexusGenRootTypes['Location']; // Location!
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
  }
}

export interface NexusGenFieldTypeNames {
  AffectedRowsOutput: { // field return type name
    count: 'Int'
  }
  Bubble: { // field return type name
    createdAt: 'DateTime'
    id: 'String'
    members: 'User'
  }
  Location: { // field return type name
    city: 'String'
    country: 'String'
    id: 'Int'
  }
  Mutation: { // field return type name
    createOnePost: 'Post'
    updateManyPost: 'AffectedRowsOutput'
  }
  Post: { // field return type name
    authors: 'User'
    id: 'Int'
    status: 'PostStatus'
  }
  Query: { // field return type name
    user: 'User'
    users: 'User'
  }
  User: { // field return type name
    firstName: 'String'
    id: 'String'
    location: 'Location'
    posts: 'Post'
  }
}

export interface NexusGenArgTypes {
  Bubble: {
    members: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      orderBy?: NexusGenInputs['BubbleMembersOrderByInput'][] | null; // [BubbleMembersOrderByInput!]
      where?: NexusGenInputs['BubbleMembersWhereInput'] | null; // BubbleMembersWhereInput
    }
  }
  Mutation: {
    createOnePost: { // args
      data: NexusGenInputs['PostCreateInput']; // PostCreateInput!
    }
    updateManyPost: { // args
      data: NexusGenInputs['PostUpdateManyMutationInput']; // PostUpdateManyMutationInput!
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
  }
  Query: {
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  User: {
    posts: { // args
      after?: NexusGenInputs['PostWhereUniqueInput'] | null; // PostWhereUniqueInput
      before?: NexusGenInputs['PostWhereUniqueInput'] | null; // PostWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['PostOrderByWithRelationInput'][] | null; // [PostOrderByWithRelationInput!]
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}