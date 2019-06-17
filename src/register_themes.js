import { ThemeManager } from '@mozaik/ui'

import {
    nightGreen,
    sunsetTheme,
    woodTheme

} from 'mozaik-themes-extra'

ThemeManager.add(nightGreen)
ThemeManager.add(sunsetTheme)
ThemeManager.add(woodTheme)
ThemeManager.defaultTheme = woodTheme.name
