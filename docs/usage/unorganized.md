# Unorganized

## Unset

```
Unset "Unset Sample1"
    Class "Map"
```

```
################################################################################
# Unset Sample1                                                                #
################################################################################
# Unset
```

```
Unset "Unset Sample2"
    Class "Map"

    Mixin "Rarity"
        Show "Rare"
            Rarity Rare
        Unset "Magic"
            Rarity Magic
        Hide "Normal"
            Rarity Normal
```

```
################################################################################
# Unset Sample2                                                                #
################################################################################
# Rarity is "Rare"
Show
    Class "Map"
    Rarity Rare
    SetFontSize 32

# Rarity is "Magic"
# Unset

# Rarity is "Normal"
Hide
    Class "Map"
    Rarity Normal
    SetFontSize 32
    DisableDropSound True

# Rarity is Any
# Unset
```

## Color Function

```
Show "Color Function Sample"
    SetBackgroundColor Var("Skill Gem Color")
    SetFontSize 45

    Mixin "Function"
        Show "Negate()"
            Quality = 1
            SetBackgroundColor Negate()
        Show "Grayscale()"
            Quality = 2
            SetBackgroundColor Grayscale()
        Show "Saturate(90%)"
            Quality = 3
            SetBackgroundColor Saturate(90%)
        Show "Desaturate(90%)"
            Quality = 4
            SetBackgroundColor Desaturate(90%)
        Show "Lighten(60%)"
            Quality = 5
            SetBackgroundColor Lighten(60%)
        Show "Darken(60%)"
            Quality = 6
            SetBackgroundColor Darken(60%)
        Show "Whiten(90%)"
            Quality = 7
            SetBackgroundColor Whiten(90%)
        Show "Blacken(90%)"
            Quality = 8
            SetBackgroundColor Blacken(90%)
        Show "Hex(360)"
            Quality = 9
            SetBackgroundColor Hex(360)
        Show "Saturation(10%)"
            Quality = 10
            SetBackgroundColor Saturation(10%)
        Show "Lightness(10%)"
            Quality = 11
            SetBackgroundColor Lightness(10%)
```

## FontSize Function

```
Show "FontSize Function Sample"
    SetBackgroundColor Var("Skill Gem Color")
    SetFontSize 32

    Mixin "Function"
        Show "Plus(4)"
            Quality = 1
            SetFontSize Plus(4)
        Show "Minus(4)"
            Quality = 2
            SetFontSize Minus(4)
```
