import { Add } from "@mui/icons-material";
import { useTable } from "@pankod/refine-core";
import { Box, Stack, Typography, TextField, Select, MenuItem } from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";

import { PropertyCard, CustomButton } from "components";

const AllProperties = () => {
  const navigate = useNavigate();

  const {
    tableQueryResult: { data, isLoading, isError },
    current,
    setCurrent,
    setPageSize,
    pageCount,
    sorter, setSorter,
    filters, setFilters,
  } = useTable();

  const allProperties = data?.data ?? [];

  if(isLoading) return <Typography>Loading...</Typography>
  if(isError) return <Typography>Error Ocured...</Typography>

  console.log(data);

  return (
    <Box>
      <Box mt="20px" sx={{display: 'flex', flexWrap: 'wrap', gap: 3}}>
        <Stack direction="column" width="100%">
        <Typography fontSize={25} fontWeight={700} color="#1142d">
          {!allProperties.length ? 'There are no properties' : 'All properties'}
        </Typography>
        <Box mb={2} mt={3} display="flex" width="84%" justifyContent="space-between" flexWrap="wrap">
          <Box display="flex" gap={2} flexWrap="wrap" mb={{ xs: '20px', sm: 0}}>
            <CustomButton title={'Sort price'} 
              handleClick={() => {}}
              backgroundColor="#475be8"
              color="#fcfcfc"/>
          </Box>
          <TextField 
            variant="outlined"
            color="info"
            placeholder="Search by title"
            value=''
            onChange={() => {}}
          />
          <Select 
            variant="outlined"
            color="info"
            displayEmpty
            required
            inputProps={{'aria-label': 'without label'}}
            defaultValue=""
            value=""
            onChange={() => {}}
          >
            <MenuItem value="">All</MenuItem>
          </Select>
        </Box>
        </Stack>
      </Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CustomButton title="Add Property" 
          handleClick={()=> navigate('/properties/create')}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add/>}/>
      </Stack>

      <Box mt="20px" sx={{ display: 'flex', flexWrap: 'wrap', gap: 3}}>
        {allProperties.map((property) => (
          <PropertyCard 
            key={property._id}
            id={property._id}
            title={property.title}
            price={property.price}
            location={property.location}
            photo={property.photo}
          />
        ))}
      </Box>

      {allProperties.length > 0 && (
        <Box display="flex" gap={2} mt={3} flexWrap="wrap">
          <CustomButton title="previous" 
            handleClick={() => setCurrent((prev) => prev - 1)}
            backgroundColor="#475be8"
            color="#fcfcfc"
            disabled={!(current > 1)}
            />
          <Box display={{ xs: 'hidden', sm: 'flex'}}
            alignItems="center" gap="5px">
              page{' '}<strong>{current} of {pageCount}</strong>
          </Box>
          <CustomButton title="Next" 
            handleClick={() => setCurrent((prev) => prev + 1)}
            backgroundColor="#475be8"
            color="#fcfcfc"
            disabled={current === pageCount}
            />
          <Select 
            variant="outlined"
            color="info"
            displayEmpty
            required
            inputProps={{'aria-label': 'without label'}}
            defaultValue={10}
            onChange={() => {}}
          >
            {[10,20,30,40,50].map((size) => (
              <MenuItem key={size} value={size}>show {size}</MenuItem>

            ))}
          </Select>
        </Box>
     )}
    </Box>
  )
}

export default AllProperties