CREATE TABLE T_ORDER_LOG (
	ORDER_ID VARCHAR(36) PRIMARY KEY,
    CUSTOMER_NAME VARCHAR(32),
    ORDER_DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

