import Button from '@mui/joy/Button';
import { Box } from '@mui/material';
import Option from '@mui/joy/Option';
import Select from '@mui/joy/Select';
import Image from 'next/image';
import { useContext } from 'react';

// React Import Above ^^^^^^

import { AppContext } from '@/context/appContext';
import ResultTable from '@/styles/components/resultTable';
import kids from './../assets/kids2.jpeg';
import countries from './../data/country.json';
import options from './../data/options.json';

const HomePage = () => {
  const appContext = useContext(AppContext);

  const { nameBody, getNames, updatePrompts, result, setResult } = appContext;

  return (
    <Box className='home-page'>
      <Box className='section-1'>
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

        {result ? (
          <>
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
          </>
        ) : null}

        <Image
          className='kids-clouds'
          src={kids}
          alt='clouds'
        />
      </Box>
    </Box>
  );
};

export default HomePage;
