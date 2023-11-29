### 2.2 SQL and NoSQL difference

SQL (Structured Query Language) and NoSQL (Not Only SQL) are two broad categories of database management systems, and they differ in terms of data model, structure, and use cases.

=> SQL Databases:

Data Structure:

- SQL databases are relational databases, meaning they use a structured schema and tables to organize and store data.
- Data is stored in rows and columns, and relationships between different tables are established using foreign keys.
  Schema:
- SQL databases have a predefined schema, which means the structure of the data (columns, data types, entity properties) must be defined before inserting data.
  Examples of SQL DBMS are:
- MySQL, PostgreSQL, SQLite, Oracle, Microsoft SQL Server.

=> NoSQL Databases:

Data Structure:

- NoSQL databases can have various data models, including document-based, key-value pairs, wide-column stores, and graph databases.
- They are designed to handle unstructured or semi-structured data.
  Schema:
- NoSQL databases are often schema-less or have a dynamic schema, allowing for flexibility in the data structure.
  Examples od NoSQL DBMS are:
- MongoDB (document-based), Cassandra (wide-column store), Redis (key-value store), Neo4j (graph database).

=> Use Case Examples:

SQL Use Case: E-commerce System

- An e-commerce system where data relationships, such as between users, orders, and products, are well-defined.
- Transactions are crucial to maintain data consistency (e.g., deducting inventory when an order is placed).
  NoSQL Use Case: Content Management System (CMS)
- A content management system where content types and structures can vary widely.
- The flexibility of NoSQL allows for adding or modifying fields without altering the entire database schema.
  SQL Use Case: Financial Systems
- Financial systems that require ACID capabilities.

### 2.3 CORS and handling issues

CORS, or Cross-Origin Resource Sharing, is a security feature, that is implemented by web browsers that controls how web pages in one domain can request and interact with resources from another domain. It is a security mechanism to prevent unauthorized access to resources on a different origin (domain).

=> CORS Working:

Same-Origin Policy: - Browsers enforce a policy called the Same-Origin Policy, which restricts web pages from making requests to a different domain than the one that served the web page.

Cross-Origin Requests: - When a web page makes a request to a different domain, the browser blocks the request by default due to the Same-Origin Policy.

CORS Headers: - CORS introduces additional HTTP headers that the server can use to indicate which origins are permitted to access the resources on the server.

=> Handling CORS related issues:
Server-Side Configuration:
Configure the server to include appropriate CORS headers in its responses. For example, in Node.js with Express, you can use the cors middleware.
--> ## "I actually used it in the current backend code".

Specific Origins: - Set specific origins in the `Access-Control-Allow-Origin` header rather than using the wildcard (`*`) if possible.

Handling Credentials: - If the frontend includes credentials (e.g., cookies) in requests,by ensuring that the server includes `Access-Control-Allow-Credentials: true` and set the `withCredentials` option on the client-side accordingly.

Preflight Requests: - For non-simple requests (e.g., requests with custom headers or specific HTTP methods), browsers may send a preflight request (OPTIONS) to check if the server allows the actual request.

### 2.4 Coding Best Practices

Maintaining a clean and efficient codebase is crucial for long-term project success and collaboration.

Descriptive Naming: - Clear and consistent naming conventions enhance code readability and maintainability.
-Using meaningful and descriptive names for variables, functions, and classes.

Modularization and Code Organization:
-Dividing code into small, focused functions and modules with clear responsibilities
-Following a consistent file and folder structure.

Code Comments and Documentation:
-Use meaningful comments to describe the purpose and usage of each module or function.
