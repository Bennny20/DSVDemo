DECLARE @return_value int,
@outputNumber int,
@outputResult nvarchar(50) EXEC @return_value = [dbo].[LoginProcedure] @inputUsername = @paramUserName,
@inputPassword = @paramPassWord,
@outputNumber = @outputNumber OUTPUT,
@outputResult = @outputResult OUTPUT
SELECT
    @outputNumber as N'outputNumber',
    @outputResult as N'outputResult';

SELECT
    'Return Value' = @return_value;

SELECT
    @outputNumber as N'outputNumber',
    @outputResult as N'outputResult';

SELECT
    *
FROM
    [dbo].[UserLogin] a
    LEFT JOIN [dbo].[Employees] b ON a.ma_nhan_vien = b.employees_code
WHERE
    a.username = @outputResult;