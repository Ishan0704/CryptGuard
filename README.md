# 🔐 CryptGuard  

CryptGuard is a **platform developed to classify a Bitcoin address as suspicious or not.**  

The prediction is made using **majority voting** from three different ML algorithms:  
- 🌲 Random Forest Classifier  
- 🌳 Decision Tree Classifier  
- ⚡ LightGBM  

For training, we used a subset of the **Bitcoin Heist Ransomware Dataset**.  
Since the dataset was imbalanced, we applied both **up-sampling** and **down-sampling** techniques to balance it and ensure fair class representation.  

---

## 🏆 Achievement  
This project was awarded **First Prize and Trophy** at the **LoGMIEER Techfest 2025**, held on **1st March 2025** at *Loknete Gopinath Mundhe Institute of Engineering Education and Research*.  

---

## 🚀 Getting Started  

### 1. Clone this repository  
```bash
git clone https://github.com/Ishan0704/CryptGuard.git
cd CryptGuard
```
### 2. Run this application 
```blash
python app.py
```
### 3. View on Local Host once started
```blash
http://127.0.0.1:5000
```

### 4. Some Sample Address for DEMO purpose
```blash
1. 11122aVHBPVz12MJMQLATu8zHvW924yUPX
2. 111K8kZAEnJg245r2cM6y9zgJGHZtJPy6
```
---

## 📂 Dataset  
We trained our models on the **Bitcoin Heist Ransomware Dataset**.  
Since the original dataset was imbalanced, we applied **up-sampling and down-sampling techniques** to balance it, ensuring fair class representation and better model performance.  

🔗 [Bitcoin Heist Dataset on Kaggle](https://www.kaggle.com/datasets/sapere0/bitcoinheist-ransomware-dataset)  

---

## 👨‍💻 Team Members  
- **Ishan Dixit**  
- **Pranav Bijalpure** 
- **Rimzim Chark**
- **Mrunal Bagal**  

---

## ✨ Notes  
- This project was developed as a **Final Year Academic Project** focusing on **Blockchain Fraud Detection**.  
- Predictions are based on **majority voting from three ML models**: Random Forest, Decision Tree, and LightGBM.  
- The application is designed for **educational purposes** and **does not represent real-world financial advice or fraud detection**.  


