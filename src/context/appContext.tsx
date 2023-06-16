import { searchNames } from '@/apis';
import { ReactElement, createContext, useState } from 'react';

export const AppContext = createContext<any>(null);

interface AppContextProviderProps {
  children: ReactElement;
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [nameBody, setNameBody] = useState({
    starts_with: 'any letter',
    gender: 'any gender',
    origin: 'any',
    style: 'any style',
    syllables: 'any',
    additional_info: ' ',
  });

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const getNames = async () => {
    try {
      setLoading(true)
      const data: any = await searchNames({ ...nameBody });
      console.log('data', data);
      if (data && data.statusCode === 200) {
        if (data.body.names !== undefined) {
          var arrayString = data.body.names;
          var formattedString = arrayString.replace(/'/g, '"'); // Replace single quotes with double quotes
          var temp = JSON.parse(formattedString);
          // const temp = JSON.parse('{' + data.body.names + '}');
          if (result) setResult([...result, ...temp]);
          else setResult([...temp]);
          console.log({ names: [...temp] }, data.body.names);
        } else alert('something went wrong');
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  const updatePrompts = (key: string, event: any) => {
    setResult(null);
    const val = event?.target.innerHTML;
    console.log('event', val, nameBody, key);
    const temp = { ...nameBody };
    if (key === 'starts_with') {
      setNameBody({ ...temp, starts_with: val });
    } else if (key === 'gender') {
      setNameBody({ ...temp, gender: val });
    } else if (key === 'origin') {
      setNameBody({ ...temp, origin: val });
    } else if (key === 'style') {
      setNameBody({ ...temp, style: val });
    } else if (key === 'syllables') {
      setNameBody({ ...temp, syllables: val });
    }
  };

  return (
    <AppContext.Provider
      value={{
        nameBody,
        updatePrompts,
        getNames,
        result,
        setResult,
        loading,
        setLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
