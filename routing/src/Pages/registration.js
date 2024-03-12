export default function Registration()
{
    return (<div>
        	<form action="register" method="post"/>
			<h1>Create Account</h1>
			<label>Username* :</label>
			<input type="text" placeholder="Enter Your Name" name="username"/>
			<br></br>
			<br></br>
			<label>Email ID*    :</label>
			<input type="email" placeholder="Enter Your Email" name="email"/>
			<br></br>
			<br></br>
			<label>Password* :</label>
			<input type="password" placeholder="Enter Your Password" name="password"/>
			<br></br>
			<br></br>
			<label>Gender*   :</label>
			<input type="radio" name="gender" value="male"/>Male
			<input type="radio" name="gender" value="female"/>Female
			<input type="radio" name="gender" value="other"/>Others
			<br></br>
			<br></br>
			<label>Role*     :</label>
			<input type="radio" name="role" value="admin"/>Admin
			<input type="radio" name="role" value="customer"/>Customer
			<br></br>
			<br></br>
			<label>Address*   :</label>
			<input id="address" type="text" placeholder="Enter Your Adress" name="address"/>
			<br></br>
			<br></br>
			<input type="submit" value="SUBMIT"/>
		
        
    </div>
            );
}