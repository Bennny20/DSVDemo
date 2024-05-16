DECLARE @return_value int,
@outputResult nvarchar(500);

SELECT
    @outputResult = N'1' EXEC @return_value = [dbo].[OnAddDataToSQL] @mahoso = N'1',
    @tuoi = N'1',
    @hocvan = N'1',
    @sohuutaisan = N'1',
    @thunhapchinh = N'11',
    @chitieuhangthang = N'1',
    @nghenghiep = N'1',
    @thoigianlamviec = N'1',
    @thunhapkhac = N'1',
    @thunhapnguoidongtrachnhiem = N'1',
    @lienketxahoi = N'1',
    @thoigiansinhsong = N'1',
    @nguoiphuthuoc = N'1',
    @loaihinhsinhsong = N'1',
    @nguoibaolanh = N'1',
    @quanhentindung = N'1',
    @outputResult = @outputResult OUTPUT
SELECT
    @outputResult as N'@outputResult'
SELECT
    'Return Value' = @return_value