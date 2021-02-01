import { SearchBar } from 'react-native-elements';

import React, {useState} from 'react'
import { View, Text } from 'react-native'

export default function Search() {
    const [Search, setSearch] = useState('')

    const updateSearch = (search) => {
        setSearch(search)
    };

    return (
        <SearchBar
            placeholder="Search"
            onChangeText={updateSearch}
            value={search}
        />
    )
}
