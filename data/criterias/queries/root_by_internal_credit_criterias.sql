SELECT
    [ID],
    [ma_loai_tieu_chi],
    [loai_tieu_chi],
    [diem_ty_trong],
    [ma_loai_tieu_chi_tin_dung],
    [isSingle],
    [isChecked]
FROM
    [DSGAppraisalSoftwareX].[dbo].[cac_tieu_chi_tin_dung_noi_bo_cha]
WHERE
    [ma_loai_tieu_chi_tin_dung] = @input_ma_loai_tieu_chi_tin_dung;