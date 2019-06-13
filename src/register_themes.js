import { ThemeManager } from '@mozaik/ui'

import {
    testGreen


} from 'mozaik-themes-extra'

ThemeManager.add(testGreen)
ThemeManager.defaultTheme = testGreen.name
