import React, {
    useState,
    useEffect,
    useCallback
} from 'react';


const useCallbackExample = () => {
    const [todos, setTodos] = useState([]);

    const add1 = useCallback(() => {
        
    }, [])

    useEffect(() => {

    }, []);

    return
};

export default useCallbackExample;
