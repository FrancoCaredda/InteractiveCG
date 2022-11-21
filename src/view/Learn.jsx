import { create, all } from "mathjs";
import React from "react";
import FractalCanvas from "./FractalCanvas";
import "./theme/learn-page.css";
import img from "../rgbtohsl.jpg";
import img2 from "../hsltorgb.jpg";
import img3 from "../translation.jpg";
import img4 from "../scale.jpg";
import img5 from "../rotate.jpg";

function Learn() {
    return (
        <div className="learn-page">
            <div className="fractals">
                <div className="caption">
                    <h1>Фрактали</h1>
                </div>
                <div className="text">
                    <div className="caption">
                        <h2>Означення</h2>
                    </div>
                    <div className="text-image-wrapper">
                        <p>
                            У математиці фрактал - це геометрична структура, яка є деталізованою структурою із властивітю самоповторення.
                            На рисунку з права показано фрактал мандельброта, який є одним із найпопулярніших фракталі.
                            <i>Даний фрактал згенерований програмою</i></p>
                            <FractalCanvas Width={100} Height={100} iter={25} rad={40} zoom={1.2} const={new create(all,{}).complex(0.7, 0)} color={[25, 255, 25]}/>
                    </div>
                    <div className="caption">
                        <h2>Види фракталів</h2>
                    </div>
                    <p>У загальному існують три види фракталів, а саме:
                        <ol>
                        <li>Алгебраїчні - фрактали, які описані на основі ітераційних формул на комплексній прощині;</li>
                        <li>Геометричні - фрактали, які будуються на основі інших фігур. Ці фігури можуть бути представлені ламанами і т.д.;</li>
                        <li>Стохастичні - фрактали, які містять неконтрольовані параметри.</li>
                        </ol>
                        <center>
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhYYGBgaGBgWHBgYGRgYGBgYGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQnJCsxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ND80NDE0NDExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAACAwQAAQUG/8QALhAAAgICAQIEBgEFAQEAAAAAAAECEQMhMUFRBBJhcROBkaGx8MEUMtHh8SJS/8QAGwEAAwEBAQEBAAAAAAAAAAAAAgMEAQAFBgf/xAAlEQACAgICAgIDAAMAAAAAAAAAAQIRAyESMRNBBFEiMmEUQlL/2gAMAwEAAhEDEQA/APHyrmjsH5vkTZJvuNwT1taPrMrqJ4eCMh//AJ/j1FTjX6xkFS4OeVvr9SPlbPRxuSEvLwv8D8c7YE4f9D8Nip8mZWlEsjlTWyrEvkOmjkUkq+4eSFHh5ZNzGRl6RJkf72EZYKnQ+evQVOWmhVvkPTa9kMo1tdw8EvlYrJN1+8Gxt62dONodHJfZfGC55ON79APi8C8s3RJKPF0w5fkMkldnYprQnHN9UOU/kLUW3QidocsnSjQzK7EgTY1YF3QayaQzxPinxySy8ScchCW98fwXYsEePRVDJejs8trYjLD/AM0XY8aa6P8AIM8a+Zvj4PQ3VaPMa3fy+xdgg3QmeG3vpstwLyorjK0ibNHVnVCn6CpR32KIq+QMkNDY5KZHJWDDb0Oxre+giMkuh2aZRGaWiOeK2V/G9vqjEezBWvsHw/wfCCZTj8OlQrw09lM8keF018g8s5PR5UE4nZJHJQ6gSUm1QzaVPgGPVlUJJCeXwMUHafoMhFUMjOqEZsmg3JIOD2cyPp8zN+hLLJ12eZJcpXQ5OSVnckujJs/oMnOxLbNjC2HzkS/DvkKEK5ZREDJUmOeO10Njm2qAfTZyWRhpxQGaZJPA72j04VKJ3DPoOlkvoRxdbGwyrotGR+PbtHTgw5ZH0/yA5+u/U7OaVkvnTey2OFasllHiOVq3ugskde6CjHVMTnn2/UURxpdBY572d8NKnRTkaWyGM3a79xsm66g5MddlSkuNJmyPzPqOil07E+HkfJdiXdiZSdGUXyFm2ub/AIAeTowPNvsbbWxapguMn8vuNm+/oMh+o5knF+pvmlJmvHbEedmD+L7GC5y+jvEaORe1jYSb/n/giVUq+oeGS6M9BO1bPmn9Fi0PhNe+iaMk+ewzFJ9N2YpVoPHp7NGW3yMxzsGUxC50IncitKMmXvS29kedasY818iMs/oT8Hy0hkpVpE/m7sbGWn+sRlqxMMhRHFqzVLVMtlxrQmcK67X3OxygZ8uvU6LcXs7HFqWiac3yLlk7MCc+vQm86vkOaUlZ6fx5Voqhmd0yxNeW11IMaVeo9ZOgqOHZROVhzTYqEd7Y+fHJN56lQbjekJlGy+M9JcgqFisc02OT2BHknQpxSDWA75ej0HjzJ6+QM5dymSUlsFTR2EOouaO+dHFXN9COUKejZT+gZTXAEObvYE5bfoBPLXHJrhUTINSZTPNSpLnkVHm76E8MwUppoRFcWW8aQ20Ym+f4MO8iMoe8tXvXYDFlruIyDMMFL6bfco5fZ8vKFSsvhOyrBka5JMUfL+Qvj09hSpiuMuWizLPXqKyZKFQn5tnZKzY8U6ZVBSSthQYrPNi8smv37i521YUYrlY6LV2LzyfzORlXuTZpO1sdjbrZQ8SUbQfDltBwyjbtb4IY5N+hZCSfBNOKsdBceyfL5XaIpwoszKiTJPqbBR6K4WnaNHPXUepp9SNR6tBx40/5DegnybsrhlpV1OObbslberHYpO+otJK2Pim0UQnvgo+NbrkBJNHYY6MtS6JcsXsqxpfMPLbXUntoKE3316m1XZKk0xc517nPitPQWTHeybL6DYqLHpUFPJbsXKfOzk6Et2uKF5sUasPGlZpzt2HCS6iseJnYdnwSygq0XR3pjaRjv7wYVw/gfj/g+UbpDoaAg376BSfsVRXSZ8rKEpGy5b7heakjkEu2g/Knpf8AQ5bKceLQyEuHbQ+ctVy6J26X8C3lfsRyk+VjfDSAyzdUBjnqrYjxHexmCVr1K4zXEGOOzmRKwpa44OSd65Fx7eo9ZLiWRxJI3kd2hsZVfQB6TO45qtmPo3hoR4jL0qxMHa9RkpICMOGdFpIFXHTBujRl20cyLZyGT0OdSDhNLbHJHYS39g3TXJzHp0c0qHPN/wAlXhJO98F8V7HnY51z3LITX+hEvxMk/ZV8JPdgrHXqG12+gUIU7diZTdbEPHy2ieeP1+RPNclmaXzJcj8y+YUPkJDYxajTRPCC3obHw5yWLsHjyVp8m5MjkjfG09CcuHYOLw9beytq2PhBITGTZTjjJkH9OzHp0jDNjuEvs8uE3Y2HGwMa+ZzNJ/IyUqdI8Tx7Gxj3A81cAx3Ht0NN679BkWq2V48Ogslc2KnJhRhdN8HMq+gt00NeO0SZZN0juF0lbA8Q9i4vYUVQt4tFjkjJCJoast69CiELdnOwc0heOfQZNJi/KUTimqCclE5kjWzim+VwFP1FZPfkQ4pIlyzUno6n5jTikL4D8+tnRg27FcX6DVaoNq37C8c0kFGaYctMfCLD3sqwuTr8k0OxZhhX8EmSRTGHpnqeHkq9eCqUFSRP4F62WrHfHBBOTuw1j4yo83xEVf7wTpd0ernxa4JZ+H9AIyTKXBOJHmXRfKhDwSuz0lid3XA6WBtFEZ17OjBEOCPVlsIp8ifh1aNBPuOjG1Y6MK6G+RdjHfI+5jOL+w+LPEWal9rC8ypMk898gRnsfLErs8lQ9s9KE1JdhMobBjOlsKLtrqIa42WYY6eh8OPQX4lVr/o5aAyyteq0ZZvibdnnOFsHytFLdLQclaMUpWblhxWiOSZxd0PlTENHoY5pEjQSdchwkmSOR3HkplDakSZbboflh1ZLkY/JkTVMn0C4OieEd7NyaCCgrfoMhDfQFSUVTKYxUnSAkdxt3TGuG1+A446l7omnlRSoPsbglXJ6XhpI82Eb0eh4eCtE86aKIp6PS8Kt7PRWRd0QYZ9Og6UCCbrspjj5P8iqUkIb3wDFVxv1D83TsLclRSvjqtBOCu0qBmug6CClCjIzSFrE1Igaq9CJQ5KPEZGmIUn/ANL8TciiEGK8zMN1/wDLMP4B8GfNzxMUvuVysXLFtMrm0nvo+eU9HMcHL94LcWOu4vHj162UpMgnkV0UwyKhcpuwM3p2sbNI5GHcBtLoa8qSsildC45GUZV8gFHudy1QmeVtWzkUrbAe/b1Dxwe1Q54QoTp0Rzy/RNLCnwTzwO2XShS9RWSVIsjN3oj5Sbpkjx+b5GnBILGnd/MocHL09RrzPqxkcbuxXh/Ya4HcOOvc71FOakyiKSdoKGFbDhj6HIWX4IJqyLPLiPUm+hWCFXYfrQ6GLd+4UMXUyMk0PhKuynw0bLJ0iLE36lXw21zsky/sVOerGRiH8N1YOKL4KnL/AM8CGqGQytoRCaSCeS6XuJkxuNa9TKimOvQrNhv+CZ42iqc/qKltl2GXEfidx2Tb9TofnMU+VB2jzv6futbFzwI9KcejAlgf2OyZnJnw3OS9nnwx+uwpR1V9Q5QYtxdEspNsZHM7ORh3YWSOrN4fHb30Czt3p6AjPexrz/ZBOfoHjx3vv6cDHh78DMEfkMck9myzqS0FigkmT5I7PQhFLTNLDHnsamuxKd9nm/DdO9CZQTVdj05xsmeHoymDCjC5WSwgaTVMZKHKQHl06D5JdFvjvo5gT568bHQx7O4YdB+KDViJZu6EzTQvBDuj0sEElwLxxVqyqGPWiWUnPsBNi4x3aCxwT4VNjIJLoNhiraRnkrRdijrZyUK4/A3FDV9Qoa537hpJL1EtOUilJVTOwiurGT0heLkY4vlhOIWOLT0SuNy+wxXx8hsRc5eprgrRVEQ4Cc86q6KMkaVpHnZeR6Xsqx7YXxPYwnfY6DTKKiXSVtdug3y0rfYqyYqX4I2t7+hrmmfnsYtk80mA4U/QpyYtWch4dvrrkGSjXZjckSxih8PDq1oN+FNKHloik3ypGdiPE+HVEcMD6Hoznr7+wEIXvgepNRMtolUe/QojjVcCskKd8jsM7e1Q1SdDFcmJhBbAnDZZLH1QqWLsbPK60egtRTIp4V00TKCTv9R6Wbw7q0KjhbVpGRzOtsOM/aF4oX0KMeKvyFCCjzyUpnOV+g+KmJhjumuhVjCxwXRoe2kvU2MWNWJMCMN8BcWcjLVjFv01YlxfIpilEVKHYOCXBsmVJGwz6jFdBwg5djKoOOVe/QDzXv7sj8ROnoKMbGqKWkVSyK+PuI+IrYnzXuxU7q9mSVPRTiiumUTzL6EU5fyM89+ncWsV6NjJrsqpLol+IzFPwDDOSOPdzO3wTzh25L546d9BDVaI2taPz/DOuxax62aelr2HxlW2tHJOLt0jFd7MyTRPPj8gKCb2N1sCLf0Bn3YvlYjNiVX8hEYJcMd4ub4FRZsZNqjo3eyWdo5DI/YbKPJ2Hh76D01RXGlsdDImg4642K+H0/jZXGFL1ETk0VOSQmdtCVFrVcD/ACvZsVvX56ASlxVgxtOvRNOH73Ax3/o9LLiv/Qr4SQWHMmW4lQvCHmlX5NipchKDfKLY5Ex8ZK6F/wBR1oCXi90hv9KhEsaT2b+K6DuN7Oy53sOM66imnfp9dFCwW7Ni6WyhZIpHYZr0SZJuy3+n/wCk+bFW7M5xukMjOAuEtBTarbEbsqljtGSlGwfIr0RzyLoxnnr1DfhV1QqeLmuDG0+h0fkJ6YXmRifyPscNph+VH2E42TZZUi6XV6PO8RDYvHXs/OVOoick23zrqFHSAWPaKXS9PQOVPo3mpIjtpjI31/g5OdCZSd/LRNNp6GRTkjubGn+TmPDSCgxig6JpT4lcYVGxPw7dVoN4q1pDY12FTd862b5GzkmwIKnsfCF2BQ3w8G2ZkbqylR1YuUNC4Rqz0VgVcili8r4IsmW12Mi7FwhJ6bHY8ffZyXLY7C7/AMCsc5IdHJQqfh12JpQr3PVnH0AhhXuX4fkOPYxZNX7POir9/sNfhlq1srWBbfHShV3yVxy3tC5Tk2Ry8Nu+h2UktfvzKG+i2C4Jmv5C9jFkuNMRjk/kLyR8xcoVx9Bc407639BHnV2DHK4uzypYGnfQrww6jpRv90HDH5f8nPPekMfy0L8ia1z+CGeGrVlzxu27OPH9RuObTuwV8hdnm/COl3l9PwYd5mZ/l/09txb10ETjG/4KG9k8ops5waPjVNyRyOOPNiciv37lPle/+UKjANRpbZ0cq6IMmKXQ0ML6npwS4NLEleiDLPiy6EuiOlxQbjS5H/Dpa+4nLidevoRSlyez0IPRJncl8wYRv8lUcN6YHk7D4R0E+9GUN/cpwxV6J8cXZdhjRmW+NDfQxwV70LyRTsfKmqrYuMOjPKnKh8EkrRI4a4Dx6aQ3yb/AGbXA2DVIGdIqUUZv8CMTlQUYSXUY9Ck32aSf1FrHdlcGuv6ziq9dR8c1IHzeiSHh7CeGt8lyhRpwr95Aea2dKdkE4vX5AeGyuWLetHfgX3Fzy0LedRVHnTx9UaCsrlD5inFIzHmsnlm0KjBLbF546tfQdNt9NE2Sf0KoZqewXlddiq9zG8vqYo86A87PoMiu/QCGGtse5dKF5Wz1sicYnz2PPboCcFKxTx00NhKl6mhO3f6yOU6Wx8V7NHGlvkocdLVnIUwoOjzsqUmX4JWJfhgMsPQuhK3TFZ49KJY3GVHqR6PKyw6o5CGq4LXi6M6/C2UwnYalxRHjxJLVFcMa+YDx7H48bOyy1QXkcloJ43el0NHD10V+Gn3NLr/g8vPfoOOVpURThS/foIzYuHRb8FthTxLTFY81aClJV/SOGJ0MXPBZ8DsceD6j45FImlmd0J+Gmv8AAMsW1XcsjjaS/fsNx4Or+hrnToVKavRPDC31Dl4crhhS9/sPUPQ5yp6AnmpUeTLH1pgTgejOFicuNJmZWuOiXypyIZY+SPxeHVnsyglwiDxUE1uxWJ2wm0eT5qskyK3ZRnx02Ij3ZalTsTKWwPIYPzftHQ+R3I+if+QM/wDa/Yxj6fOfO4u0RLp7BYjGPMy9Hqw/UqxcjXwzpiRdleAdDhe8hU+vuYxN/uz1kKX9o2H9vzMYKHRr6YrKMxGMbk9GQ6GLlmnyYxFl7Yxeh6ARjHn+zZ9jsYrN0MYbh7JJl2D+051ZjD5divY18fMz/kxjBWUEmy/3GME+iZfsDP8Ag8/xHDMYXg/YeeZ4nn6HneJ5OmL30Kl2LMYxhh//2Q==" 
                                alt="Стохастичний фрактал" width={150} height={150} />
                            <img src="https://bentrubewriter.files.wordpress.com/2012/04/dragoncurvestage10.png" width={110} height={150} alt="Геометричний фрактал" />
                        </center>
                    </p>
                    <div className="caption">
                        <h2>Алгоритм побудови фрактала Мандельброта</h2>
                    </div>
                    <p>
                        Для побудови фракталу Мандельброта використовують ітеративну формулу: <i>z=z&#178; + c</i>, 
                        де z і c - комплексні числа, тобто <i>z = x + i*y</i>.
                    </p>
                    <p>
                        Визначають певну кількість ітерацій, 
                        яку необхідно виконати для того щоб визначити чи точка на комплексній 
                        площині належить множині Мандельброта.
                        На кожній ітерації обчислюють нове значення функції z.
                        Якщо модуль комплексного числа, тобто <i>z&#178; = x&#178; + y&#178;</i>, 
                        більший за заданий радіус, то точка не належить множині Мандельброта, повертаємо колір 1.
                        Інакше якщо було пройдено всі ітерації, то повертаємо <i>колір 2</i>. 
                        <i>Колір 2</i> - позначає точку, яка належить множині.
                    </p>
                    <div className="caption">
                        <h1>Субтрактивна модель кольорів CMYK</h1>
                    </div>
                    <p>
                        Субтрактивна модель кольорів - це модуль кольорів, яка утворюється операцією відмнімання. 
                        Від того й пішла назва <i>"субтрактивна модель"</i>.
                    </p>
                    <p>
                        До субтрактивних моделей відносять модель CMYK.
                        CMYK - це модель, яка утворює кольори, на основі трьох базових кольорів, а саме:
                        <ol>
                            <li>Cyan - блакитний;</li>
                            <li>Magenta - фіолетовий;</li>
                            <li>Yellow - жовтий.</li>
                        </ol>
                        Компонента K - позначає кількість чорного кольору в кінцевому кольорі. 
                        Оскільки CMYK застововують у друкарських машинах, то для отримання чорного кольору потрібно би було змішати всі три кольори, 
                        що не є раціональним викоританням катриджів
                        Ці кольори утворюються за допомоги віднімання від 1 або 255 значення компонент моделі RBG. <i>CMY = (1 - R; 1 - G; 1 - B;)</i>.
                        Кольори СMY є доповнюючими до RGB, тобто тими, які повністю їх поглинають. <i>Даний рисунок є геомечною репрезентацією CMYK моделі.</i><br />
                        <center><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6Au1unGLGjPhee7uMWqkKfe42gC2J25fJCDLdD4POFTx8eY_Xxa_tWNYv-oTM64-sKo&usqp=CAU" 
                            alt="CMYK model" />
                        </center>
                    </p>
                    <div className="caption">
                        <h1>Перцепційна модель кольорів HSL</h1>
                    </div>
                    <p>
                            Перцепційні моделі кольорів - це моделі, які орієнтовані на те, щоб відображати кольори, 
                            які є такими як баче їх наше око.
                        </p>
                        <p>
                            HSL - це перцепційна модель, яка містить наступні координати: HUE (пігмент), SATURATION (насиченість), LIGHT (освітленість).
                            Пігмент вказує на колір, який ми будемо відображати. Насиченість вказує на те, наскільки наш колів є близьким до чистого пігменту.
                            Освітленість вказує на те, наскільки світла потрапляє у вихідний колір. При зменшені освітленості зменшується діапазон кольорів.
                            Дана модель використується для редагування кольорів на фото і т.д. <br />
                            <center>
                                <img src="https://www.researchgate.net/profile/Ingo-Schiller/publication/4171911/figure/fig3/AS:670005163204645@1536753087929/The-Hue-Saturation-Luminance-HSL-color-space-Color-information-is-decoupled-from_Q640.jpg" 
                                     alt="HSL model" width={200} height={200} />
                            </center>
                    </p>
                    <div className="caption">
                        <h2>Формули перетворення кольорів у RGB в HSL</h2>
                    </div>
                    <p>
                        Дані формули призначені для перетворення адитивної моделі RGB у перцепційну модель HSL
                        <center>
                            <img src={img} width={300} height={300} alt="" srcset="" />
                        </center>
                    </p>
                    <div className="caption">
                        <h2>Формули перетворення кольорів HSL у RGB</h2>
                    </div>
                    <p>
                        Дані формули призначені для перетворення перцепційної моделі HSL в адитивну моделі RGB 
                        <center>
                            <img src={img2} width={300} height={300} alt="" srcset="" />
                        </center>
                    </p>
                    <div className="caption">
                        <h1>Найпростіші афінні перетворення</h1>
                    </div>
                    <p>
                        Афінне перетворення — відображення площини або простору в собі, при якому паралельні прямі переходять у 
                        паралельні прямі, пересічні — в пересічні, мимобіжні — в мимобіжні.
                    </p>
                    <p>
                        Найпростіше афінне перетворення задається наступним чином:  <br />
                        (X, Y) - нові координати точки. <br />
                        (x, y) - старі координати точки. <br />
                        X = Ax + By + C; <br />
                        Y = Kx + Ny + M; <br />
                        Так само цей вираз можна подати у вигляді тариці, і помножити її на координати старої точки.
                    </p>
                    <div className="caption">
                        <h2>Основні афінні перетворення</h2>
                    </div>
                    <div className="text-image-wrapper" style={{marginTop: 10}}>
                        <p style={{width: 500, marginRight: 5}}>
                            Дана матриця описує афінне перетворення зсуву:
                        </p>
                        <img src={img3} alt="translation matrix" width={70} height={70} style={{transform: "translate(-100%, 0)"}} />
                    </div>
                    <div className="text-image-wrapper" style={{marginTop: 10}}>
                        <p style={{width: 500, marginRight: 5}}>
                            Дана матриця описує афінне перетворення приближення:
                        </p>
                        <img src={img4} alt="scale matrix" width={70} height={70} style={{transform: "translate(-100%, 0)"}} />
                    </div>
                    <div className="text-image-wrapper" style={{marginTop: 10}}>
                        <p style={{width: 500, marginRight: 5}}>
                            Дана матриця описує афінне перетворення поворот на кут &alpha;:
                        </p>
                        <img src={img5} alt="rotation matrix" width={90} height={70} style={{transform: "translate(-50%, 0)"}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Learn;