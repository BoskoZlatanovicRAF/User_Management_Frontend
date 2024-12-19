export enum PermissionType {
  CAN_CREATE_USERS = 'CAN_CREATE_USERS',
  CAN_READ_USERS = 'CAN_READ_USERS',
  CAN_UPDATE_USERS = 'CAN_UPDATE_USERS',
  CAN_DELETE_USERS = 'CAN_DELETE_USERS'

}

export interface Permission {
  id: number;
  type: PermissionType;
}
