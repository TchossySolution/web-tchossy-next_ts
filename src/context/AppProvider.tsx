import React, { createContext, useState } from 'react'
import { IChildren } from '../interfaces/children'
import { UserInterface } from '../interfaces/IUser'
import { defaultTheme } from '../themes/default'

interface AppContextInterface {
  isSignedIn: boolean
  setIsSignedIn: (value: any) => void
  user: UserInterface
  setUser: (value: any) => void
  menuIsVisible: boolean
  setMenuIsVisible: (value: any) => void
  searchIsVisible: boolean
  setSearchIsVisible: (value: any) => void
  theme: string
  setTheme: (value: any) => void
  themeToggler: () => void
  isDarkMode: boolean
  setIsDarkMode: (value: any) => void
}

const AppContext = createContext<AppContextInterface>({} as AppContextInterface)

const AppProvider: React.FC<IChildren> = ({ children }): JSX.Element => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(true)

  const [user, setUser] = useState<UserInterface>({
    _id: '',
    first_name: '',
    last_name: '',
    photo_profile: '',
    email: '',
    password: ''
  })

  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)
  const [searchIsVisible, setSearchIsVisible] = useState<boolean>(false)

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <AppContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn,
        user,
        setUser,
        menuIsVisible,
        setMenuIsVisible,
        searchIsVisible,
        setSearchIsVisible,
        theme,
        setTheme,
        isDarkMode,
        setIsDarkMode,
        themeToggler
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
