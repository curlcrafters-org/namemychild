import * as React from 'react';
import Table from '@mui/joy/Table';
import {Box} from "@mui/material";
import {Typography} from "@mui/joy";
import {AiOutlineHeart} from "react-icons/ai";

interface resultProps {
  data: any[];
}




const ResultCard = (props:any) =>{
    return(
        <Box className={'result-card'}>
            <Box className={'heart'}>
                <AiOutlineHeart/>
            </Box>
            <Typography className={'name'}>
                {props.name}
            </Typography>
            <Typography className={'meaning'}>
                    {props.meaning}
            </Typography>
        </Box>
    )
}

export default function ResultTable({ data }: resultProps) {
  return (
      <Box className={'result-container'}>
          {data.map((el, index) => (
              <ResultCard key={el.name + index} {...el}/>
          ))}
      </Box>

  );
}
