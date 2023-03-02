import os

file_name = input()
# exit(0)
# 遍历文件夹
def walkFile(file):
    for root, dirs, files in os.walk(file):
        # root 表示当前正在访问的文件夹路径
        # dirs 表示该文件夹下的子目录名list
        # files 表示该文件夹下的文件list

        # 遍历文件
        for f in files:
            # if(f.find('js') != -1):
            file = os.path.join(root, f)

            if(f.find(file_name) != -1): # 只搜索文件名含js的文件
                print(root, dirs, f)

        # 遍历所有的文件夹
        for d in dirs:
            pass
            # os.path.join(root, d)
            # print(os.path.join(root, d))

def main():
    walkFile(".")

if __name__ == '__main__':
    main()
