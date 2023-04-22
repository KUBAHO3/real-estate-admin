import { Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button} from "@pankod/refine-mui"

import { FormProps } from "interfaces/common"
import CustomButton from "./CustomButton"

const Form = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, propertyImage}: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        { type } a property
      </Typography>
      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
        <form style={{marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px'}}
          onSubmit={handleSubmit(onFinishHandler)}
        >
          <FormControl>
            <FormHelperText
              sx={{fontWeight: 500, margin: '10px', fontSize: 16, color: '#11142d'}}
            >Enter property name:</FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
             {...register('title',{
              required: true,
             })} 
            />
          </FormControl>
          <FormControl>
            <FormHelperText
              sx={{fontWeight: 500, margin: '10px', fontSize: 16, color: '#11142d'}}
            >Enter Description:</FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              placeholder="Write a description"
              color="info"
              style={{ width: '100%', background: 'transparent', fontSize: '16px', borderColor: 'rgba(0,0,0,0.23)', borderRadius: 6, padding: 10, color: '#919191'}}
              {...register('description',{
                required: true,
               })}
            />
          </FormControl>

          <Stack direction="row" gap={4}>
            <FormControl>
                <FormHelperText
                    sx={{
                        fontWeight: 500,
                        margin: "10px 0",
                        fontSize: 16,
                        color: "#11142d",
                    }}
                >
                    Enter rooms:
                </FormHelperText>
                <TextField
                    fullWidth
                    required
                    id="outlined-basic"
                    color="info"
                    type="number"
                    variant="outlined"
                    {...register("rooms", { required: true })}
                />
            </FormControl>
            <FormControl>
                <FormHelperText
                    sx={{
                        fontWeight: 500,
                        margin: "10px 0",
                        fontSize: 16,
                        color: "#11142d",
                    }}
                >
                    Enter baths:
                </FormHelperText>
                <TextField
                    fullWidth
                    required
                    id="outlined-basic"
                    color="info"
                    type="number"
                    variant="outlined"
                    {...register("baths", { required: true })}
                />
                </FormControl>
                <FormControl>
                <FormHelperText
                    sx={{
                        fontWeight: 500,
                        margin: "10px 0",
                        fontSize: 16,
                        color: "#11142d",
                    }}
                >
                    Enter Area:
                </FormHelperText>
                <TextField
                    fullWidth
                    required
                    id="outlined-basic"
                    color="info"
                    type="number"
                    variant="outlined"
                    {...register("area", { required: true })}
                />
                </FormControl>
                <FormControl sx={{ flex: 1 }}>
                  <FormHelperText
                      sx={{
                          fontWeight: 500,
                          margin: "10px 0",
                          fontSize: 16,
                          color: "#11142d",
                      }}
                  >
                      Rent Frequency:
                  </FormHelperText>
                  <Select
                      variant="outlined"
                      color="info"
                      displayEmpty
                      required
                      inputProps={{ "aria-label": "Without label" }}
                      defaultValue="Monthly"
                      {...register("rentFrequency", {
                          required: true,
                      })}
                  >
                      <MenuItem value="monthly">furnitured</MenuItem>
                      <MenuItem value="Yearly">Yearly</MenuItem>
                  </Select>
              </FormControl>
              <FormControl sx={{ flex: 1 }}>
                  <FormHelperText
                      sx={{
                          fontWeight: 500,
                          margin: "10px 0",
                          fontSize: 16,
                          color: "#11142d",
                      }}
                  >
                      Is it furnitured:
                  </FormHelperText>
                  <Select
                      variant="outlined"
                      color="info"
                      displayEmpty
                      required
                      inputProps={{ "aria-label": "Without label" }}
                      defaultValue="true"
                      {...register("furnishingStatus", {
                          required: true,
                      })}
                  >
                      <MenuItem value="furnitured">furnitured</MenuItem>
                      <MenuItem value="Not furnitured">Not furnitured</MenuItem>
                  </Select>
              </FormControl>
          </Stack>

          <FormControl>
            <FormHelperText
              sx={{fontWeight: 500, margin: '10px', fontSize: 16, color: '#11142d'}}
            >Enter Amenities:</FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
             {...register('amenities',{
              required: true,
             })} 
            />
          </FormControl>

          <Stack direction="row" gap={4}>
              <FormControl sx={{ flex: 1 }}>
                  <FormHelperText
                      sx={{
                          fontWeight: 500,
                          margin: "10px 0",
                          fontSize: 16,
                          color: "#11142d",
                      }}
                  >
                      Select Property Type
                  </FormHelperText>
                  <Select
                      variant="outlined"
                      color="info"
                      displayEmpty
                      required
                      inputProps={{ "aria-label": "Without label" }}
                      defaultValue="apartment"
                      {...register("propertyType", {
                          required: true,
                      })}
                  >
                      <MenuItem value="apartment">Apartment</MenuItem>
                      <MenuItem value="villa">Villa</MenuItem>
                      <MenuItem value="farmhouse">farmhouse</MenuItem>
                      <MenuItem value="condos">Condos</MenuItem>
                      <MenuItem value="townhouse">Townhouse</MenuItem>
                      <MenuItem value="duplex">Duplex</MenuItem>
                      <MenuItem value="studio">Studio</MenuItem>
                      <MenuItem value="chalet">Chalet</MenuItem>
                  </Select>
              </FormControl>
              <FormControl>
                  <FormHelperText
                      sx={{
                          fontWeight: 500,
                          margin: "10px 0",
                          fontSize: 16,
                          color: "#11142d",
                      }}
                  >
                      Enter property price
                  </FormHelperText>
                  <TextField
                      fullWidth
                      required
                      id="outlined-basic"
                      color="info"
                      type="number"
                      variant="outlined"
                      {...register("price", { required: true })}
                  />
              </FormControl>
          </Stack>

          <FormControl>
            <FormHelperText
                sx={{
                    fontWeight: 500,
                    margin: "10px 0",
                    fontSize: 16,
                    color: "#11142d",
                }}
            >
                Enter Location
            </FormHelperText>
            <TextField
                fullWidth
                required
                id="outlined-basic"
                color="info"
                variant="outlined"
                {...register("location", { required: true })}
            />
          </FormControl>

          <Stack direction="column" justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Typography color="#11142d" fontSize={16} fontWeight={500} my="10px">Property Photo:</Typography>
              <Button component="label" sx={{ width: 'fit-content', color: "#2ed480", textTransform: 'capitalize', fontSize: 16}}>
                Upload *
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    // @ts-ignore
                    onChange={(e) => { handleImageChange(e.target.files[0]) }}
                  />
              </Button>
            </Stack>
            <Typography fontSize={14} color="#808191" sx={{
              wordBreak: 'break-all'
            }}>{propertyImage?.name}</Typography>
          </Stack>

          <CustomButton
            type="submit"
            title={formLoading ? "Submitting..." : "Submit"}
            backgroundColor="#475be8"
            color="#fcfcfc"
          /> 
        </form>
      </Box>
    </Box>
  )
}

export default Form