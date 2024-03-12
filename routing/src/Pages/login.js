export default function Login(){
    return (<div>
        
	<h1>User Login</h1>
			<label>Email ID*    :</label>
			<input type="email" placeholder="Enter Your Email" name="email"/>
			<br></br>
			<br></br>
			<label>Password* :</label>
			<input type="password" placeholder="Enter Your Password" name="password" />
			<br></br> 
			<br></br>
			<input type="submit" value="LOGIN"/>
	</div>);
}