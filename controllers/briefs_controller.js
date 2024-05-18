"use strict";

const briefData = require("../data/briefs");

const getBriefPoint = async (req, res) => {
  try {
    const points = await briefData.getBriefPoint();
    res.status(200).json(points);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const getAllBrief = async (req, res) => {
  try {
    const brief_code = req.param("brief_code");
    let data;
    if (brief_code != undefined)
      data = await briefData.getBriefByCode(brief_code);
    else data = await briefData.getAllBrief();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const getAllAsset = async (req, res) => {
  try {
    const asset_code = req.param("asset_code");
    let data;
    if (asset_code != undefined)
      data = await briefData.getAssetByCode(asset_code);
    else data = await briefData.getAllAsset();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const getAllAppraisalPlan = async (req, res) => {
  try {
    const appraisal_plan_code = req.param("appraisal_plan_code");
    let data;
    if (appraisal_plan_code != undefined)
      data = await briefData.getAppraisalPlanByCode(appraisal_plan_code);
    else data = await briefData.getAllAppraisalPlan();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const getAllAppraisalDocumentDetail = async (req, res) => {
  try {
    const appraisal_documents_detail_code = req.param("appraisal_documents_detail_code");
    let data;
    if (appraisal_documents_detail_code != undefined)
      data = await briefData.getAppraisalDocumentDetailByCode(
        appraisal_documents_detail_code
      );
    else data = await briefData.getAllAppraisalDocumentDetail();

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const getAllAppraisalPlanDetail = async (req, res) => {
  try {
    const appraisal_plan_detail_code = req.param("appraisal_plan_detail_code");
    let data;
    if (appraisal_plan_detail_code != undefined)
      data = await briefData.getAppraisalPlanDetailByCode(
        appraisal_plan_detail_code
      );
    else data = await briefData.getAllAppraisalPlanDetail();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const SuperDetailByBriefCode = async (req, res) => {
  try {
    const brief_code = req.param("brief_code");
    let data;
    if (brief_code != undefined)
      data = await briefData.SuperDetailByBriefCode(
        brief_code
      );
    else data = await briefData.getAllSuperDetail();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const SuperDetailByCustomerCode = async (req, res) => {
  try {
    const customer_code = req.param("customer_code");
    let data;
    if (customer_code != undefined)
      data = await briefData.SuperDetailByCustomerCode(
        customer_code
      );
    else data = await briefData.getAllSuperDetail();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const getAssetDetail = async (req, res) => {
  try {
    const customer_code = req.param("customer_code");
    const asset_code = req.param("asset_code");
    const asset_type_code = req.param("asset_type_code");
    let data;
    if (customer_code != undefined)
      data = await briefData.getAllAssetDetailByCustomer(
        customer_code
      );
    else if (customer_code != undefined)
      data = await briefData.getAssetDetailByCode(
        asset_code
      );
    else if (customer_code != undefined)
      data = await briefData.getAllAssetDetailByType(
        asset_type_code
      );
    else {
      data = await briefData.getAllAssetDetail();
    }
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getBriefPoint,
  getAllBrief,
  getAllAsset,
  getAllAppraisalPlan,
  getAllAppraisalDocumentDetail,
  getAllAppraisalPlanDetail,
  SuperDetailByBriefCode,
  SuperDetailByCustomerCode,
  getAssetDetail
};
