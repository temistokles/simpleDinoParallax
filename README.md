# Simple Dino Parallax

Simple and light-weight **parallax** with support of vertical and horizontal scrolling, transparency and rotation.

Depends on jQuery.



Plugin was inspired by lack of support for various type of parallax/scroll-based plugins available.
It is minimalistic just to fulfill the needs of www.simpledino.com. Feel free to contribute.


## Install and usage
Copy simpleDinoParallax.js to your project and call

```
$('.parallax').parallax();
```

(In this case, mark the required elements with class "parallax").


To specify required effects use the following CSS classes.

| Class                      | Meaning                                     |
| -------------------------- | ------------------------------------------- |
| parallax-vertical-scroll   | vertical parallax effect                    |  
| parallax-hotizontal-scroll | horizontal parallax effect                  |  
| parallax-rotate            | rotation effect based on current scroll     |  
| parallax-transparency      | transparency effect based od current scroll |

To specify speed of the effect use the following HTML5 data-* attributes.

| Attribute                        | Meaning                                                                                        |
| -------------------------------- | ---------------------------------------------------------------------------------------------- |
| data-parallax-speed              | Speed of (any) parallax effect. Will be overriden by following attributes if they are present. |  
| data-parallax-vertical-speed     | Speed of vertical parallax scroll effect.                                                      |  
| data-parallax-horizontal-speed   | Speed of horizontal parallax scroll effect.                                                    |  
| data-parallax-transparency-speed | Speed of transparency parallax effect.                                                         |  
| data-parallax-rotate-speed       | Speed of parallax rotation effect.                                                             |
   