import React, {useState} from 'react';

export const useRegister = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const register = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
          })
          const json = await response.json()
          
          if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
          }

          if (response.ok) {
            setIsLoading(false)
          }


    }

    return {register, isLoading, error}
}