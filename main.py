# Importar os módulos necessários
from functions.ultilitarios import extrair_dados_documento
import pytesseract

def main():
    # Definir o caminho para o executável do Tesseract OCR
    pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

    # Caminho da imagem
    #imagem_path = ".//data//images//cnh.jpg"  
    imagem_path = ".//data//images//cnh2.jpeg"

    # Chamar a função para processar a imagem do documento
    dados_documento = extrair_dados_documento(imagem_path)

    #mostrar dados do documento
    print(dados_documento)

if __name__ == "__main__":
    main()