import json

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
    num = 0
    with open("WLC_ENG.txt", "r") as f:
        for line in f:
            txt_list[num] = line
            num += 1

    print(txt_list)

    file_path = "WLC_ENG.json"
    with open(file_path, 'w', encoding='utf-8') as outfile:
        # for line in txt_list:
        json.dump(txt_list, outfile, indent=4, ensure_ascii=False)


if __name__ == '__main__':
    ENG_func()
