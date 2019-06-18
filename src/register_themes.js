import { ThemeManager } from '@mozaik/ui'

import {
    nightGreen,
    sunsetTheme,
    woodTheme,
    spiceBush,
    blueTheme

} from 'mozaik-themes-extra'

ThemeManager.add(nightGreen)
ThemeManager.add(sunsetTheme)
ThemeManager.add(woodTheme)
ThemeManager.add(spiceBush)
ThemeManager.add(blueTheme)
ThemeManager.defaultTheme = woodTheme.name
