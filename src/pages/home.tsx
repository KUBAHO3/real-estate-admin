import { useList } from '@pankod/refine-core';
import { Box, Typography, Stack } from '@pankod/refine-mui';
import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from 'components';


const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
      <PieChart
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={['#475be8', '#e4e8ef']}
        />
        <PieChart
          title="Properties for Rent"
          value={550}
          series={[60, 40]}
          colors={['#c8e847', '#e4ebef']}
        />
        <PieChart
          title="Total Customers"
          value={5684}
          series={[75, 25]}
          colors={['#47e8a0', '#e4e8ef']}
        />
        <PieChart
          title="Properties for Cities"
          value={504}
          series={[75, 25]}
          colors={['#b847e8', '#e4e8ef']}
        />
      </Box>
      <Stack mt="25px" width="100%" direction={{ xs: 'column', lg:'row'}} gap={4}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  )
}

export default Home