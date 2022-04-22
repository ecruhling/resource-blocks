<div id="top"></div>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ecruhling/resource-blocks">
    <img src="assets/images/r.png" alt="Logo" width="89" height="162">
  </a>

<h3 align="center">Resource Blocks</h3>

  <p align="center">
    Custom WordPress blocks for <a href="https://resourceatlanta.com">Resource Branding's</a> website
    <br />
  </p>
</div>




<!-- ABOUT -->
## About

[![Resource Blocks][product-screenshot]](https://resourceatlanta.com)

A collection of custom blocks built for the WordPress block editor. These blocks integrate with the custom WordPress theme used by <a href="https://resourceatlanta.com">Resource Branding's website</a>.

Included blocks:

* Full-width Image
* Two-column Images
* Image (Size constrained; image that has an additional field to constrain the width or height.)
* Triptych
* Full-width Video (Vimeo embed)
* Body Text
* Introductory Paragraph
* Secondary Title
* Questionnaire

Included patterns:

* Team member template

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [@wordpress/create-block](https://www.npmjs.com/package/@wordpress/create-block)
* [@ryanwelcher/multiple-blocks-template](https://www.npmjs.com/package/@ryanwelcher/multiple-blocks-template)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### Image (Size Constrained)

This is built from the core WordPress image block, but strips out the resize functionality and instead integrates a field allowing for size constraints to be added to the image.
So if your design requires that an image be a specific size (in particular a certain aspect ratio), you can input the width & height in this control.
Images that are not equal to the value(s) set in this control will not be allowed for upload or selection.

This block also adds additional controls for the image caption, allowing the caption to be visually hidden, or for the alignment of the caption text.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Erik Rühling - erik@resourceatlanta.com

Git Repository: [https://github.com/ecruhling/resource-blocks](https://github.com/ecruhling/resource-blocks)



<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ecruhling/resource-blocks.svg?style=for-the-badge
[contributors-url]: https://github.com/ecruhling/resource-blocks/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ecruhling/resource-blocks.svg?style=for-the-badge
[forks-url]: https://github.com/ecruhling/resource-blocks/network/members
[stars-shield]: https://img.shields.io/github/stars/ecruhling/resource-blocks.svg?style=for-the-badge
[stars-url]: https://github.com/ecruhling/resource-blocks/stargazers
[issues-shield]: https://img.shields.io/github/issues/ecruhling/resource-blocks.svg?style=for-the-badge
[issues-url]: https://github.com/ecruhling/resource-blocks/issues
[license-shield]: https://img.shields.io/github/license/ecruhling/resource-blocks.svg?style=for-the-badge
[license-url]: https://github.com/ecruhling/resource-blocks/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/erik-rühling-1a452138
[product-screenshot]: assets/images/screenshot.gif
