import CountryList from "../components/CountryList"
import RegionMenu from "../components/RegionMenu"
import Searchinput from "../components/Searchinput"
import ShowMessage from "../components/ShowMessage"
import { useFetchData } from "../useFetchData"

const Home = () => {
    const {
        result ,  
        filterCountries ,
        isLoading , 
        isError,
        setFilterCountries
    } = useFetchData();

    return (
        <>
        {isError && <ShowMessage message="Someting went wrong!"/>}
        {isLoading && <ShowMessage message="Loading countris data...!"/>}
        {!isError && !isLoading && (
          <>
            <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
              <Searchinput
                countriesList={result}
                filterCounteriesList={setFilterCountries}
              />
              <RegionMenu
                countriesList={result}
                filterCounteriesList={setFilterCountries}
              />
            </div>
            <CountryList data={filterCountries} />
          </>
        )}
        </>
    );
};

export default Home;