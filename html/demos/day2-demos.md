```js
<!DOCTYPE html>
<html>

<head>
    <title>My First Webpage</title>
</head>

<body>
    <img src="images/image1.jpeg" border="1" width="200" height="200" alt="learning image" title="learning" />

    <h1>
        <marquee direction="right" behavior="slide" scrollamount="5">
            ABC Technologies
        </marquee>
    </h1>
    <hr color="red" />
    <font color="blue" face="Monotype corsiva" size="4">
        <div align="right">
            21/1 , <b>Anna Street</b>,<br />
            <u>Chennai -600017</u>,<br />
            <i>Tamilnadu</i>.<br />
        </div>
    </font>
    <hr />
    <nav align="right" id="menu"> |
        <a href="#list">List</a> |
        <a href="#table">Table</a> |
        <a href="#image">Image</a> |
        <a href="#links">Links</a> |
        <hr />
    </nav>
    <h2 id="list">List</h2>
    <ol type="1" start="1">
        <li>Frontend</li>
        <ul type="circle">
            <li> <a href="html.html"> HTML </a></li>
            <li> <a href="css.html">CSS</a></li>
            <li> <a href="javascript.html">Javascript</a></li>
        </ul>
        <li>Backend</li>
        <dl>
            <dt>Spring Boot</dt>
            <dd>This is Java Based</dd>

            <dt>Node.js</dt>
            <dd>This is Javascript based </dd>
        </dl>
        <li>Database</li>
        <ol>
            <li>Oracle</li>
            <li>MySQL</li>
        </ol>
    </ol>
    <hr />
    <h2 id="table">Table</h2>
    <table border="1" width="60%" bgcolor="cyan" cellpadding="5px" cellspacing="15">
        <thead>
            <tr>
                <th colspan="4" align="right">Aug 2024 Batch</th>
            </tr>
            <tr>
                <th>Module</th>
                <th>Topics</th>
                <th>Trainer</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <a href="html.html" target="_blank">
                        <img src="images/html.jpeg" height="100" width="150" alt="html">
                    </a>
                </td>
                <td>
                    List Elements <br />
                    Table Elements <br />
                    Form Elements <br />
                </td>
                <td align="center" rowspan="2">Ram</td>
                <td>4 days</td>
            </tr>
            <tr>
                <td>CSS</td>
                <td>
                    Types of Styles <br />
                    Types of Selectors <br />
                </td>
                <td>3 days</td>
            </tr>
            <tr>
                <td>Javascript</td>
                <td>
                    Functions <br />
                    Control Statements <br />
                    Validation <br />
                </td>
                <td align="center">Krishna</td>
                <td>5 days</td>
            </tr>
        </tbody>
        <tr>
        </tr>
    </table>


    <h2 id="image">Image</h2>
    <!--  
    there is no closing tag for img tag , since its called as void element
    -->


    This is sample for images

    <img src="images/image2.jpeg" align="right" border="1" width="200" height="200" alt="learning image2"
        title="learning2" />

    <h2 id="links"> Links </h2>
    <a href="newpage.html" target="_self">new page</a>
    <br>
    <a href="#menu"> go to menu </a>

    <hr />

    <h2>Image with Links (Map) </h2>
    <img src="images/image3.jpeg" height="400" width="400" border="1" usemap="#web" />

    <map name="web">
        <area shape="rect" coords="0,0,200,200" href="css.html" title="css">
        <area shape="rect" coords="200,0,400,200" href="javascript.html" title="javascript">
        <area shape="rect" coords="0,200,400,400" href="html.html" title="html">
    </map>

    <hr />
    <h2>Form - Registration</h2>
    <form action="html.html" method="post">

        <table>
            <tr>
                <td>
                    <div align="center">
                        <fieldset style="width:400px">
                            <legend>Basics Details</legend>
                            <table>
                                <tr>
                                    <td>Name</td>
                                    <td><input type="text" placeholder="enter your fullname" required></td>
                                </tr>

                                <tr>
                                    <td>Username</td>
                                    <td><input required type="text" size="30" minlength="10" maxlength="25"></td>
                                </tr>

                                <tr>
                                    <td>Password</td>
                                    <td><input type="password"></td>
                                </tr>


                                <tr>
                                    <td>Confirm Password</td>
                                    <td><input type="password"></td>
                                </tr>


                                <tr>
                                    <td>Gender</td>
                                    <td>
                                        <input name="gender" type="radio" value="male" checked>Male
                                        <input name="gender" type="radio" value="female">Female
                                    </td>
                                </tr>

                                <tr>
                                    <td>Language Known</td>
                                    <td>
                                        <input type="checkbox" value="english" checked>English
                                        <input type="checkbox" value="hindi">Hindi
                                        <input type="checkbox" value="tamil">Tamil
                                    </td>
                                </tr>

                            </table>

                        </fieldset>
                    </div>
                </td>
                <TD>
                    <Fieldset style="width:400px">
                        <legend align="center">Other Details</legend>
                        <table>

                            <tr>
                                <td>Qualification</td>
                                <td>
                                    <select>
                                        <option value="diploma">Diploma</option>
                                        <optgroup label="Arts">
                                            <option>BSc / BCA</option>
                                            <option>MSc / MCA</option>
                                        </optgroup>
                                        <optgroup label="Engg">
                                            <option selected>BE</option>
                                            <option>ME</option>
                                        </optgroup>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td>DOB</td>
                                <td>
                                    <input type="date">
                                </td>
                            </tr>

                            <tr>
                                <td>Email</td>
                                <td>
                                    <input type="email">
                                </td>
                            </tr>

                            <tr>
                                <td>Resume</td>
                                <td>
                                    <input type="file">
                                </td>
                            </tr>

                            <tr>
                                <td>Fav Color</td>
                                <td>
                                    <input type="color">
                                </td>
                            </tr>

                            <tr>
                                <td>Address</td>
                                <td>
                                    <textarea rows="5" cols="35">

                               </textarea>
                                </td>
                            </tr>

                            <tr>
                                <td colspan="2" align="center">
                                    <input type="submit" value="Submit">

                                    <input type="reset" value="Reset">
                                </td>
                            </tr>

                        </table>
                </td>
            </tr>
        </table>


        <br>

        </fieldset>
    </form>

    <br><br><br><br> <br><br><br><br>
</body>

</html>
```
