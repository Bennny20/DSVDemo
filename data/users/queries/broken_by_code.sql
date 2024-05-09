SELECT [Mã người môi giới] AS 
      ,[Tên]
      ,[Giấy tờ]
      ,[Địa chỉ]
      ,[Giới tính]
      ,[Điện thoại]
  FROM [dbo].[View_Xem_Nguoi_Mo_Gioi]
  WHERE
    [Mã người môi giới] = @input;
	