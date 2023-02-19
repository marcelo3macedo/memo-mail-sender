[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/marcelo3macedo/memo-mail-sender">
    <img src="images/logo.png" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">Memo Mail Sender</h3>

  <p align="center">
    A tool to improve your studying and productivity
    <br />
    <a><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://memorizou.com.br">View Demo</a>
    ·
    <a href="https://github.com/marcelo3macedo/memo-mail-sender/issues">Report Bug</a>
    ·
    <a href="https://github.com/marcelo3macedo/memo-mail-sender/issues">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project was developed based on spaced repetition theory.
Spaced repetition is an evidence-based learning technique that is usually performed with flashcards. 
Newly introduced and more difficult flashcards are shown more frequently, while older and less difficult flashcards are shown less frequently in order to exploit the psychological spacing effect. 
The use of spaced repetition has been proven to increase rate of learning.

Read more: https://en.wikipedia.org/wiki/Spaced_repetition

This service has a functionality to manage notification by mail to the users. The communication with this service is possible using a messaging software (RabbitMQ).

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [Nodejs](https://nodejs.org/)
* [Docker](https://www.docker.com/)
* [Typescript](https://www.typescriptlang.org/)
* [RabbitMQ](https://www.rabbitmq.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* yarn
  ```sh
  npm install --global yarn
  ```
   

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/marcelo3macedo/memo-mail-sender.git
   ```
2. Install Yarn packages
   ```sh
   yarn
   ```
3. Run backend project https://github.com/marcelo3macedo/memo-mail-sender.git

4. Run project for development
   ```sh
   yarn start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


### Sending an mail

You can send a mail publishing a message in RabbitMQ queue.

- Queue: 
  mail-validation
- Message:
  ```
    {
      "type": "new-user",
      "name": "test",
      "email": "test@test.com",
      "params": [
        { 
            "key": "{{userName}}",
            "value": "test"
        },
        { 
            "key": "{{activationLink}}",
            "value": "https://memorizou.com.br"
        }
      ]
    }
  ```

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Marcelo Alberico Macedo - marcelo3macedo@gmail.com

Project Link: [https://github.com/marcelo3macedo/memo-mail-sender](https://github.com/marcelo3macedo/memo-mail-sender)

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/marcelo3macedo/memo-mail-sender/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/marcelo3macedo/memo-mail-sender/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/marcelo3macedo/memo-mail-sender/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/marcelo3macedo/memo-mail-sender/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/marcelo3macedo/memo-mail-sender/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/marcelo-alberico-macedo-23639630
[product-screenshot]: images/logo.png
