type AddressType = {
  street: string,
  city: string,
  state: string,
  postalCode: string,
}

export interface UserType {
  id: number,
  name: string,
  email: string,
  mobile: string,
  dob: string,
  address: AddressType,
  designation: string
}

export interface UserTaskType {
  id?: number | undefined,
  userId: number,
  title: string,
  description: string,
  status: string,
  dueDate: string | null,
}