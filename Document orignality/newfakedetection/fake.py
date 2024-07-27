from Ipython.display import Image, clear_output
from roboflow import Roboflow
rf = Roboflow(api_key="ZudH2bF1jKTjmgSakdvM",model_format="yolov5")
dataset = rf.workspace().project("aadhar card detection Computer Vision Project").version(1).download(location="/")