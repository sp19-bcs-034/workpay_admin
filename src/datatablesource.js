export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "azad123",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "azad13@gmail.com",
    age: 22,
  },
  {
    id: 2,
    username: "azad1",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "azad12@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 3,
    username: "azad12",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "azad11@gmail.com",
    status: "pending",
    age: 22,
  },
  {
    id: 4,
    username: "abdullah1234",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "abdullah13@gmail.com",
    status: "active",
    age: 23,
  },
  {
    id: 5,
    username: "abdullah12345",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "abdullah12@gmail.com",
    status: "passive",
    age: 23,
  },
  {
    id: 6,
    username: "abdullah123456",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "abdullah11@gmail.com",
    status: "active",
    age: 23,
  },
  {
    id: 7,
    username: "sadd1234567",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "sadd13@gmail.com",
    status: "passive",
    age: 21,
  },
  {
    id: 8,
    username: "sadd12345678",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "sadd12@gmail.com",
    status: "active",
    age: 21,
  },
  {
    id: 9,
    username: "sadd123456789",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "sadd11@gmail.com",
    status: "pending",
    age:21,
  },
  {
    id: 10,
    username: "azad123111",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "azad7866@gmail.com",
    status: "active",
    age: 22,
  },
];
