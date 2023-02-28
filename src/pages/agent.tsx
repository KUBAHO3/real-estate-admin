import { useList } from "@pankod/refine-core"
import { Box, Typography } from "@pankod/refine-mui"

import { AgentCard } from "components";

const Agents = () => {
  const { data, isLoading, isError } = useList({
    resource: 'users'
  })

  const allAgents = data?.dta;

  return (
    <div>agent</div>
  )
}

export default Agents