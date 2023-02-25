import { Typography, Box, Stack } from '@pankod/refine-mui';
import { useDelete, useGetIdentity,useShow } from '@pankod/refine-core';
import { useParams, useNavigate } from '@pankod/refine-react-router-v6';
import { ChatBubble, Delete, Edit, Phone, Place, Star } from '@mui/icons-material';

import { CustomButton } from 'components';

const propertyDetails = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const { id } = useParams();
  const { mutate } = useDelete();
  const { queryResult } = useShow();
  
  const { data, isLoading, isError } = queryResult;
  return (
    <div>Property details</div>
  )
}

export default propertyDetails