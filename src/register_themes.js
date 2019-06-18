import { ThemeManager } from '@mozaik/ui'

import {
    nightGreen,
    sunsetTheme,
    woodTheme,
    spiceBush

} from 'mozaik-themes-extra'

ThemeManager.add(nightGreen)
ThemeManager.add(sunsetTheme)
ThemeManager.add(woodTheme)
ThemeManager.add(spiceBush)
ThemeManager.defaultTheme = woodTheme.name
