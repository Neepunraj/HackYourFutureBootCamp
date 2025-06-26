import connection from "../db/knexfile.js"


export const queryContacts = async (req, res) => {

    let result = connection.select("*").from("contacts");

    /*   if ("sort" in req.query) {
          const orderBy = req.query.sort.toString();
          if (orderBy.length > 0) {
              result = result.orderByRaw(orderBy);
          }
      } */

    if ("sort" in req.query) {
        const sortQuery = req.query.sort.toString();

        const [columns, directions] = sortQuery.split(" ");
        //for validations
        const validColumns = ["id", "first_name", "last_name", "email", "phone"];
        const validDirections = ["asc", "desc"];

        if (
            validColumns.includes(columns.toLowerCase()) &&
            (!directions || validDirections.includes(directions.toLowerCase()))
        ) {
            result = result.orderBy(columns, directions?.toLowerCase() || "asc");
        } else {
            return res.status(400).json({ error: "Invalid Entry and Bad Request" });
        }
    }


    try {
        const data = await result;
        res.json({ data });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal server error" });
    }

}