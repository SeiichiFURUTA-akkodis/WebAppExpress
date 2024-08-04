CREATE TABLE T_ORDER_DETAIL (
	ID INT PRIMARY KEY COMMENT 'ID' AUTO_INCREMENT,
    ORDER_ID VARCHAR(36) NOT NULL COMMENT '注文ID',
    ORDER_ITEM_ID INT NOT NULL COMMENT '購入商品ID',
    ORDER_AMOUNT INT NOT NULL COMMENT '購入数量',
    CONSTRAINT ORDER_ID_FK
    	FOREIGN KEY (ORDER_ID)
    	REFERENCES T_ORDER_LOG (ORDER_ID),
    CONSTRAINT ITEM_ID_FK    	
    	FOREIGN KEY (ORDER_ITEM_ID)
    	REFERENCES T_ITEM (ITEMID)
) ENGINE=INNODB DEFAULT CHARSET=utf8;
