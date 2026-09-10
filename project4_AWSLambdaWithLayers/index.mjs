import bcrypt from "bcryptjs";

export const handler = async (event) => {
  try {
    const password = event.password;

    console.log("Password:", password);

    if (!password) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Password is required"
        })
      };
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    return {
      statusCode: 200,
      body: JSON.stringify({
        hashedPassword
      })
    };
  } catch (error) {
    console.error("Error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal server error"
      })
    };
  }
};