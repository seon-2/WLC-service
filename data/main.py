import json
import re
from tika import parser

def KOR_func():
    txt_list = {}
    num = 0
    with open("WLC_KOR.txt", "r") as f:
        for line in f:
            txt_list[num] = line
            num += 1

    print(txt_list)

    file_path = "WLC_KOR.json"
    with open(file_path, 'w', encoding='utf-8') as outfile:
        # for line in txt_list:
        json.dump(txt_list, outfile, indent=4, ensure_ascii=False)

def ENG_func():
    txt_list = {}
    list_99 = ['1', '2', '3', '4', '5', '6', '7', '8']
    answer_num = "0"
    line_pass = True
    with open("WLC-service/data/test.txt", "r") as f:
        for line in f:
            line = line.strip()
            if line != "\n":
                if "Q." in line:
                    line_type = "Q"
                    temp = line.split('. ')
                    question_num = temp[0] + temp[1]
                    txt_list[question_num] = []
                    txt_list[question_num].append(temp[2])

                    answer_num = "A" + temp[1]
                    txt_list[answer_num] = []

                elif "A." in line or line_type == "A":
                    line_type = "A"
                    line = line.split("A. ")[-1]

                    numbers = re.findall(r'\d+', line)

                    if numbers:
                        for num in numbers:
                            line_pass = True
                            if answer_num == "A99" and num in list_99:
                                if len(numbers) == 1:
                                    txt_list[answer_num].append(line)
                                    line_pass = False
                            else:
                                txt_list[answer_num].append(line.split(num)[0])
                                txt_list[answer_num].append("ref." + num)
                                line = line.split(num)[-1].lstrip()
                        if line and line_pass:
                            txt_list[answer_num].append(line)


                    # if answer_num == "A 99" and len(numbers) > 1:
                    #     line = line.split(numbers[1])[0]
                    #     numbers.pop(0)
                    # elif numbers:
                    #     line = line.split(numbers[0])[0]
                    #
                    # txt_list[answer_num].append(line)
                    #
                    # for number in numbers:
                    #     txt_list[answer_num].append(number)

                elif line_type == "Q" and line:
                    txt_list[question_num].append(line)




    # print(txt_list)

    file_path = "WLC_ENG.json"
    with open(file_path, 'w', encoding='utf-8') as outfile:
        # for line in txt_list:
        json.dump(txt_list, outfile, indent=4, ensure_ascii=False)


    def pdf_out_txt():
        pdf_path = "./WLC-service/data/Westminster-Larger-Catechism.pdf"
        parsed = parser.from_file(pdf_path)
        txt = open('output.txt', 'w', encoding='utf-8')
        print(parsed['content'], file=txt)
        txt.close()

    def txt_to_txt():
        txt_line = []
        with open("WLC-service/data/output.txt", "r") as f:
            for line in f:
                if line != "\n":
                    numbers = re.findall(r'\d+', line)
                    if numbers:
                        if numbers[0] != line.strip():
                            txt_line.append(line)
                    else:
                        txt_line.append(line)

        with open("WLC-service/data/test.txt", "w") as f:
            for txt in txt_line:
                f.write(txt)

if __name__ == '__main__':
    ENG_func()


