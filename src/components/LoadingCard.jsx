import { Card, CardContent, CardMedia, Skeleton } from "@mui/material";

const Loading = () => {
  return (
    <div>
      <Skeleton animation="wave" height={140} width={"100%"} variant="rectangular"></Skeleton>

      <Skeleton  animation="wave" height={40} width={150}></Skeleton>
      <Skeleton  animation="wave" height={80}></Skeleton>
      <Skeleton  animation="wave" height={40} width={40} variant="circular"></Skeleton>
    </div>
  );
};
export default Loading;
