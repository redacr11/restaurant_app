import React, { useState } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '£' || '££' || '£££'

    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("£")}
        />
        <ResultsList
          title="Bit Pricier"
          results={filterResultsByPrice("££")}
        />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("£££")}
        />
        <ResultsList
          title="Spill the Cash!"
          results={filterResultsByPrice("££££")}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
