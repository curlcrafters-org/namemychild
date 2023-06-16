import Button from '@mui/joy/Button';
import { Box } from '@mui/material';
import Option from '@mui/joy/Option';
import Select from '@mui/joy/Select';
import Image from 'next/image';
import { useContext } from 'react';
import { Hearts } from  'react-loader-spinner';

// React Import Above ^^^^^^

import { AppContext } from '@/context/appContext';
import ResultTable from '@/styles/components/resultTable';
import kids from './../assets/kids2.jpeg';
import countries from './../data/country.json';
import options from './../data/options.json';
import {Grid} from "@mui/material";
import {Typography} from "@mui/joy";
import baby from './../assets/baby.png'

const HomePage = () => {
  const appContext = useContext(AppContext);

  const { nameBody, getNames, updatePrompts, result, setResult, loading } = appContext;

  return (
    <Box className='home-page'>

      <Grid container className={'section-1'}>
        <Grid lg={4} md={6} className={'col1'}>
            <Typography className={'main-heading'}>
              Best Names for your Newborn
            </Typography>
          <Typography className={'main-para'}>
            NameMyChild is dedicated to providing best baby names that are cool and awesome so your child can get one more reason to love you.
          </Typography>
          <Button>Generate Names</Button>
        </Grid>
        <Image className={'bgImg'} src={baby} alt={'bg'}/>

      </Grid>
      <Box className='section-2'>
        <Typography className={'section-heading'}>Generate Names</Typography>
        <Box className='search-container'>
          <Box className='search-fields-container'>
            <h3>I am looking for first names that are starting with...</h3>
            <Box className='search-fields'>
              <Select
                value={nameBody.starts_with}
                onChange={(event) => updatePrompts('starts_with', event)}
              >
                <Option value='any letter'>any</Option>
                {options.letterOptions.map((el, index) => (
                  <Option
                    key={index + el}
                    value={el}
                  >
                    {el}
                  </Option>
                ))}
              </Select>
              letter are for
              <Select
                value={nameBody.gender}
                onChange={(event) => updatePrompts('gender', event)}
              >
                <Option value='any gender'>all</Option>
                {options.genderOptions.map((el, index) => (
                  <Option
                    key={index + el}
                    value={el}
                  >
                    {el}
                  </Option>
                ))}
              </Select>
              genders and have
              <Select
                value={nameBody.origin}
                onChange={(event) => updatePrompts('origin', event)}
              >
                <Option value='any'>any </Option>
                {countries.countries.map((el, index) => (
                  <Option
                    key={index + el}
                    value={el}
                  >
                    {el}
                  </Option>
                ))}
              </Select>
              origin and
              <Select
                value={nameBody.style}
                onChange={(event) => updatePrompts('style', event)}
              >
                <Option value='any style'>any </Option>
                {options.styleOptions.map((el, index) => (
                  <Option
                    key={index + el}
                    value={el}
                  >
                    {el}
                  </Option>
                ))}
              </Select>
              style with
              <Select
                value={nameBody.syllables}
                onChange={(event) => updatePrompts('syllables', event)}
              >
                <Option value='any'>any</Option>
                {options.syllablesOptions.map((el, index) => (
                  <Option
                    key={index + el}
                    value={el}
                  >
                    {el}
                  </Option>
                ))}
              </Select>
              syllables
            </Box>
          </Box>
          <Button
            className='search-btn'
            onClick={getNames}
          >
            Search Names
          </Button>
        </Box>
        <Box className={'result-section'}>
          {result ? (
              <Box className={'result-table-section'}>
                <Box className='result-table'>
                  {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{result}</ReactMarkdown> */}
                  <ResultTable data={result} />
                </Box>
                <Box className='bottom-btns'>
                  <Button
                      className='search-btn'
                      onClick={getNames}
                  >
                    Generate More
                  </Button>
                  <Button
                      className='search-btn'
                      onClick={() => setResult(null)}
                  >
                    Clear List
                  </Button>
                </Box>
              </Box>
          ) : null}
          {loading ?
              <Box className={'loading'}>
                <Hearts
                    height="80"
                    width="80"
                    color="#FFA9D0"
                    ariaLabel="hearts-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
                <Typography className={'text'}>
                  Generating Names
                </Typography>

              </Box>:null}
        </Box>
      </Box>

    </Box>
  );
};

export default HomePage;
