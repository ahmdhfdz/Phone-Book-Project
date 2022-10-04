import { gql } from "@apollo/client";

export const LOAD_CONTACT_LIST = gql`
query GetContactList (
    $distinct_on: [contact_select_column!], 
    $limit: Int, 
    $offset: Int, 
    $order_by: [contact_order_by!], 
    $where: contact_bool_exp
) {
  contact(
      distinct_on: $distinct_on, 
      limit: $limit, 
      offset: $offset, 
      order_by: $order_by, 
      where: $where
  ){
    created_at
    first_name
    id
    last_name
    phones {
      number
    }
  }
}
`
//limit: $limit
//offset: $offset

// export const useContactList = (limit:number, offset:number) => {
//   const {error, data, loading} = useQuery(LOAD_CONTACT_LIST, {
//       variables: {
//           limit,
//           offset,
//       }
//   })
  
//   return {
//       error,
//       data,
//       loading
//   }
// }